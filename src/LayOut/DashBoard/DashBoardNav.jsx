import { FaAddressBook, FaBook, FaHome, FaList, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DashBoardNav = () => {
    return (
        <div>
            <div className=" flex flex-col md:flex-col lg:flex-row items-center gap-1 mb-3">
                <FaHome />
                <NavLink to={'dashBoard/adminHome'}>ADMIN HOME</NavLink>
            </div>
            <div className=" flex flex-col md:flex-col lg:flex-row items-center gap-1 mb-3">
                <FaUtensils />
                <NavLink>ADD ITEMS</NavLink>
            </div>
            <div className=" flex flex-col md:flex-col lg:flex-row items-center gap-1 mb-3">
                <FaList />
                <NavLink>MANAGE ITEMS</NavLink>
            </div>
            <div className=" flex flex-col md:flex-col lg:flex-row items-center gap-1 mb-3">
                <FaBook />
                <NavLink to='/dashBoard/myCarts'>MANAGE BOOKINGS</NavLink>
            </div>
            <div className=" flex flex-col md:flex-col lg:flex-row items-center gap-1 mb-3">
                <FaUser />
                <NavLink to='/dashBoard/allUsers'>ALL USERS</NavLink>
            </div>
            <div className=" border-b-2 border-white my-5"></div>
            <div className=" flex flex-col md:flex-col lg:flex-row items-center gap-1 mb-3">
                <FaHome />
                <NavLink to='/'>HOME</NavLink>
            </div>
            <div className=" flex flex-col md:flex-col lg:flex-row items-center gap-1 mb-3">
                <FaUtensils />
                <NavLink>MENU</NavLink>
            </div>
            <div className=" flex flex-col md:flex-col lg:flex-row items-center gap-1 mb-3">
                <FaList />
                <NavLink>SHOP</NavLink>
            </div>
            <div className=" flex flex-col md:flex-col lg:flex-row items-center gap-1 mb-3">
                <FaBook />
                <NavLink>CONTACT</NavLink>
            </div>
        </div>
    );
};

export default DashBoardNav;