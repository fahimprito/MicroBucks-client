import { FaHome, FaTasks, FaUsers, FaPlus, FaListAlt, FaHistory, FaWallet } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/microbucks_logo.png";
import PropTypes from "prop-types";
import useAuthUser from "../../../hooks/useAuthUser";
import useAuth from "../../../hooks/useAuth";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = ({ toggleSidebar }) => {
    const { logOutUser } = useAuth();
    const { userData } = useAuthUser();
    const role = userData?.role;

    const getNavigationItems = () => {
        if (role === "admin") {
            return (
                <>
                    <li>
                        <NavLink to="/dashboard/adminHome">
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageUsers">
                            <FaUsers />
                            Manage Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageTask">
                            <FaTasks />
                            Manage Task
                        </NavLink>
                    </li>
                </>
            );
        } else if (role === "buyer") {
            return (
                <>
                    <li>
                        <NavLink to="/dashboard/buyerHome">
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/AddTask">
                            <FaPlus />
                            Add New Tasks
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/MyTasks">
                            <FaListAlt />
                            My Task’s
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/PurchaseCoin">
                            <FaWallet />
                            Purchase Coin
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/PaymentHistory">
                            <FaHistory />
                            Payment History
                        </NavLink>
                    </li>
                </>
            );
        } else if (role === "worker") {
            return (
                <>
                    <li>
                        <NavLink to="/dashboard/workerHome">
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/TaskList">
                            <FaTasks />
                            Task List
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/MySubmissions">
                            <FaListAlt />
                            My Submissions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/Withdrawals">
                            <FaWallet />
                            Withdrawals
                        </NavLink>
                    </li>
                </>
            );
        } else {
            return (
                <li>
                    <p>User Role not recognized</p>
                </li>
            );
        }
    };

    return (
        <div>
            {/* Logo */}
            <Link className="flex items-center gap-1 p-5">
                <img className="w-10" src={logo} alt="MicroBucks Logo" />
                <p className="text-3xl font-bold text-primary font-orbitron">
                    Micro<span className="font-medium ">Bucks</span>
                </p>
            </Link>

            {/* Navigation */}
            <ul className="menu p-4 gap-1" onClick={toggleSidebar}>
                {getNavigationItems()}
                
                <div className="divider"></div>
                <li onClick={logOutUser}>
                    <button>
                        <IoIosLogOut />
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
};

Sidebar.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;