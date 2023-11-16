import { FaAddressBook, FaBook, FaHome, FaList, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DashBoardNav = () => {
    return (
        <div>
            <div className=" flex items-center gap-1">
                <FaHome />
                <NavLink to={'dashBoard/adminHome'}>ADMIN HOME</NavLink>
            </div>
            <div className=" flex items-center gap-1">
                <FaUtensils />
                <NavLink>ADD ITEMS</NavLink>
            </div>
            <div className=" flex items-center gap-1">
                <FaList />
                <NavLink>MANAGE ITEMS</NavLink>
            </div>
            <div className=" flex items-center gap-1">
                <FaBook />
                <NavLink>MANAGE BOOKINGS</NavLink>
            </div>
            <div className=" flex items-center gap-1">
                <FaUser />
                <NavLink to='dashBoard/allUsers'>ALL USERS</NavLink>
            </div>
            <div className=" border-b-2 border-white my-5"></div>
            <div className=" flex items-center gap-1">
                <FaHome />
                <NavLink to={'dashBoard/adminHome'}>HOME</NavLink>
            </div>
            <div className=" flex items-center gap-1">
                <FaUtensils />
                <NavLink>MENU</NavLink>
            </div>
            <div className=" flex items-center gap-1">
                <FaList />
                <NavLink>SHOP</NavLink>
            </div>
            <div className=" flex items-center gap-1">
                <FaBook />
                <NavLink>CONTACT</NavLink>
            </div>
        </div>
    );
};

export default DashBoardNav;