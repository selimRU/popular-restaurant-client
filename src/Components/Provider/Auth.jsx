import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../FirebaseConfig/Firebase.Config";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider()
const Auth = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()


    // google login
    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name, image) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }
    // log in user
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            console.log(user);
            if (user) {
                const info = user.email
                axiosPublic.post('api/v1/jwt', info)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('token', res.data.token)
                        }

                    })

            }
            localStorage.removeItem('token')
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [axiosPublic])

    // auth values
    const authValues = {
        loginWithGoogle,
        createUser,
        logIn,
        profileUpdate,
        logOut,
        user

    }
    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;