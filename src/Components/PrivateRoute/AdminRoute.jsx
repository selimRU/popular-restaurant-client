import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";


const AdminRoute = ({ children }) => {
    const location = useLocation()
    const { user } = useAuth()
    const [isAdmin, isAdminPending] = useAdmin()
    if (isAdminPending)
        return <progress></progress>
    if (user && isAdmin) {
        return children
    }
    <Navigate to='/logIn' state={{ from: location }} replace></Navigate>

};

export default AdminRoute;