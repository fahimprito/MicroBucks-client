import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";
import { useContext, useState } from "react";
import { FaBars, FaCoins } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import Footer from "../components/Footer/Footer";
import AuthContext from "../contexts/AuthContext";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { user } = useContext(AuthContext);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div
                className={`fixed z-50 inset-y-0 left-0 w-72 transform bg-[#bee3da] transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:relative lg:translate-x-0 lg:min-h-screen`}
            >
                <Sidebar toggleSidebar={toggleSidebar}></Sidebar>
            </div>

            {/* Mobile View */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-[#bcb08c23]">
                {/* Header */}
                <header className="bg-[#5fa796] text-white p-4 flex items-center justify-between lg:px-8">
                    <div>
                        {/* Mobile Toggle Button */}
                        <button
                            className="lg:hidden text-2xl"
                            onClick={toggleSidebar}
                        >
                            <FaBars />
                        </button>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="flex flex-col gap-1 items-end">
                            {/* Coin */}
                            <div className="flex items-center gap-2">
                                <span className="text-xl">
                                    <FaCoins />
                                </span>
                                <p className="text-sm lg:text-base font-medium">
                                    <span className="font-bold">100</span> Coins
                                </p>
                            </div>
                            {/* Name */}
                            <div>
                                <p className="text-sm lg:text-base font-medium">
                                    <span className="font-bold">{user.displayName}</span>{" "}
                                    <span className="text-gray-200">(Worker)</span>
                                </p>
                            </div>
                        </div>

                        {/* User img */}
                        <div className="flex items-center gap-4">
                            <img
                                src={user.photoURL}
                                alt="User Profile"
                                className="w-10 h-10 rounded-full border-2 border-white"
                            />
                        </div>
                        {/* Notifications */}
                        <div className="relative text-2xl">
                            <IoNotifications />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                                3
                            </span>
                        </div>
                    </div>
                </header>



                {/* Main Content Area */}
                <main className="p-4 lg:p-8">
                    <Outlet />
                    <Footer></Footer>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
