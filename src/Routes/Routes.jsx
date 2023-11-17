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
                element: <OurShop />
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
                element: <AdminHome></AdminHome>
            },
            {
                path: 'allUsers',
                element: <AllUsers />
            },
            {
                path: 'myCarts',
                element: <MyCart />
            }
        ]
    }
])
