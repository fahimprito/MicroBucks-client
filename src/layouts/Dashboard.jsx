import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";


const Dashboard = () => {
    return (
        <div className="flex">
             {/* dashboard side bar */}
            <div className="w-72 min-h-screen bg-[#71c1ae75]">
                <Sidebar></Sidebar>
            </div>

            {/* dashboard content */}
            <div className="flex-1 bg-[#bcb08c23]">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;