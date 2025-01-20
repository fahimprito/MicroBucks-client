import { FaHome, FaTasks, FaUsers } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/microbucks_logo.png"
import PropTypes from "prop-types";


const Sidebar = ({ toggleSidebar }) => {
    return (
        <div>
            {/* Logo */}
            <Link className="flex items-center gap-1 p-5">
                <img className="w-10" src={logo} alt="MicroBucks Logo" />
                <p className="text-3xl font-bold text-primary font-orbitron">
                    Micro<span className="font-medium ">Bucks</span>
                </p>
            </Link>

            <ul className="menu p-4 gap-1" onClick={toggleSidebar}>
                <li>
                    <NavLink to="/dashboard/adminHome">
                        <FaHome></FaHome>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/ManageUsers">
                        <FaUsers></FaUsers>
                        Manage Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/ManageTask">
                        <FaTasks></FaTasks >
                        Manage Task
                    </NavLink>
                </li>


            </ul>
        </div>
    );
};

Sidebar.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;