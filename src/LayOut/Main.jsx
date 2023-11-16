import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Nav";
import FooterFood from "../Shared/Footer/FooterFood";


const Main = () => {
    const location = useLocation()
    const noNavbarFooter = location.pathname.includes('logIn') || location.pathname.includes('signUp')
    return (
        <div>
            {noNavbarFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noNavbarFooter || <FooterFood></FooterFood>}
        </div>
    );
};

export default Main;