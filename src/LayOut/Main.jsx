import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Nav";
import FooterFood from "../Shared/Footer/FooterFood";


const Main = () => {
    return (
        <div>
            <div >
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <FooterFood></FooterFood>
        </div>
    );
};

export default Main;