
import { Outlet } from "react-router-dom";
import DashBoardNav from "./DashBoardNav";



const DashBoard = () => {
    return (
        <div className=" max-w-6xl mx-auto flex flex-col md:flex-row gap-5">
            <div className=" w-full md:w-1/5 lg:w-1/5 bg-[#D1A054] space-y-4 p-5">
                <DashBoardNav></DashBoardNav>
            </div>
            <div className=" w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;