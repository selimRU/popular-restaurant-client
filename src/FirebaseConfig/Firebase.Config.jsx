// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAr4rf6ctsF2wWb84CJXAmfBiqL5stbbqE",
    authDomain: "popular-restaurant.firebaseapp.com",
    projectId: "popular-restaurant",
    storageBucket: "popular-restaurant.appspot.com",
    messagingSenderId: "446424602178",
    appId: "1:446424602178:web:948a8e521e64bf1714ffdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)