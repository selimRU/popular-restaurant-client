import { FadeLoader } from "react-spinners";
import useAuth from "../../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useAuth()
    if (loading)
        return <FadeLoader color="#36d7b7" />
    if (!user) {
        return <Navigate state={location.pathname} to='/logIn'></Navigate>
    }
    return children
};

export default PrivateRoute;