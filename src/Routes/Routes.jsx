import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Main from "../LayOut/Main";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";
import DashBoard from "../LayOut/DashBoard/DashBoard";
import AdminHome from "../LayOut/DashBoard/AdminHome";
import MyCart from "../LayOut/DashBoard/MyCart/MyCart";
import AllUsers from "../LayOut/DashBoard/AllUsers/AllUsers";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import AdminRoute from "../Components/PrivateRoute/AdminRoute";
import AddItem from "../Components/AddItem/AddItem";
import ManageItem from "../LayOut/DashBoard/ManageItem/ManageItem";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'shop',
                element: <PrivateRoute><OurShop /></PrivateRoute>
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'logIn',
                element: <LogIn />
            }
        ]
    },
    {
        path: '/dashBoard',
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'manageItem',
                element: <AdminRoute><ManageItem /></AdminRoute>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: 'myCarts',
                element: <AdminRoute><MyCart /></AdminRoute>
            }
        ]
    }
])
