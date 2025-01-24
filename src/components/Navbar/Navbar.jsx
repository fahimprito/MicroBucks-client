import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "motion/react"
import { FaBars, FaCoins, FaTimes } from "react-icons/fa";
import logo from "../../assets/microbucks_logo.png"
import useAuth from "../../hooks/useAuth";
import useAuthUser from "../../hooks/useAuthUser";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState(false);
    const location = useLocation();
    const { userData } = useAuthUser();
    const authData = useAuth();
    const { user, logOutUser } = authData;

    const homeLocation = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBackground(true);
            } else {
                setNavbarBackground(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Navbar links
    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "font-bold text-primary" : `${homeLocation ? `${navbarBackground ? "text-black" : "lg:text-white"}` : ""}`)}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "font-bold text-primary" : `${homeLocation ? `${navbarBackground ? "text-black" : "lg:text-white"}` : ""}`)}
                >
                    About
                </NavLink>
            </li>

            {
                user && (
                    <>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) => (isActive ? "font-bold text-primary" : `${homeLocation ? `${navbarBackground ? "text-black" : "lg:text-white"}` : ""}`)}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                    </>
                )
            }

            {
                user ? (
                    <>
                        <li className="hidden lg:flex">
                            {
                                user && <div className="dropdown dropdown-hover dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar border mt-1">
                                        <img src={user.photoURL} alt="User Icon" className="rounded-full" />
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-10 w-52 p-2 shadow space-y-2">
                                        <li><a className="text-black text-base">{user.displayName}</a></li>
                                        <li><a className="text-black text-base">Available Coin: {userData?.coins}<FaCoins /></a></li>
                                        <li><a
                                            onClick={logOutUser}
                                            className="btn btn-sm bg-primary text-white hover:bg-[#0d775dd7] font-semibold text-base px-5 border-none">Logout</a></li>
                                    </ul>
                                </div>

                            }

                        </li>
                        <li className="lg:hidden">
                            <button
                                onClick={logOutUser}
                                className="btn btn-sm bg-primary text-white hover:bg-[#0d775dd7] font-semibold text-base px-5 border-none">
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link
                                to="/login"
                                className="btn btn-sm bg-primary text-white hover:bg-[#0d775dd7] font-semibold text-base px-5 border-none">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/register"
                                className="btn btn-sm bg-primary text-white hover:bg-[#0d775dd7] font-semibold text-base px-5 border-none">
                                Register
                            </Link>
                        </li>
                    </>
                )
            }
            <li
                onClick={() => window.open("https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-fahimprito", "_blank")}
                className="btn btn-sm bg-accent hover:bg-[#d1c190] text-gray-800 text-base px-4 rounded-lg shadow-md border-none"
            >
                Join as Developer
            </li>

        </>
    );

    return (
        <nav className={`fixed top-0 w-full z-10 py-1 transition-colors duration-300 ${navbarBackground ? "bg-white shadow-lg" : "bg-transparent"
            }`}>
            <div className="container mx-auto px-6 py-4 sm:py-2 flex justify-between items-center">
                {/* Logo */}
                <Link className="flex items-center gap-1">
                    <img className="w-10 sm:w-16" src={logo} alt="MicroBucks Logo" />
                    <p className="text-2xl sm:text-5xl font-bold text-primary font-orbitron">
                        Micro<span className="font-medium ">Bucks</span>
                    </p>
                </Link>

                <div className="lg:hidden flex items-center gap-4">
                    {/* user icon  */}
                    {
                        user && <div className="relative group">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar border mt-1">
                                <img src={user.photoURL} alt="User Icon" className="rounded-full" />
                            </label>
                            <span
                                className="absolute top-14 right-0 bg-white text-black px-3 py-1 rounded shadow-md text-sm hidden group-hover:block whitespace-nowrap z-10">
                                {user.displayName}
                            </span>
                        </div>
                    }

                    {/* Menubar */}
                    <button
                        className={`${homeLocation ? `${navbarBackground ? "text-black" : "text-white"}` : ""}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                    </button>
                </div>


                {/* Desktop Links */}
                <ul className="hidden lg:flex space-x-6 text-base items-center font-medium">
                    {navLinks}
                </ul>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={`mobile-menu lg:hidden overflow-hidden px-8 bg-white`}
            >
                <ul
                    className="space-y-4 my-7 text-lg"
                    onClick={() => setIsOpen(false)}
                >
                    {navLinks}
                </ul>
            </motion.div>
        </nav>
    );
};

export default Navbar;