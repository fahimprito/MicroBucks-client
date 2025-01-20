import { FaHome, FaTasks, FaUsers } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/microbucks_logo.png"


const Sidebar = () => {
    return (
        <div>
            {/* Logo */}
            <Link className="flex items-center gap-1 p-5">
                <img className="w-10" src={logo} alt="MicroBucks Logo" />
                <p className="text-3xl font-bold text-primary font-orbitron">
                    Micro<span className="font-medium ">Bucks</span>
                </p>
            </Link>

            <ul className="menu p-4">
                <li>
                    <NavLink to="/dashboard/adminHome">
                        <FaHome></FaHome>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/adminHome">
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

export default Sidebar;