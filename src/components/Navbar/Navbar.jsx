import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "motion/react"
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/microbucks_logo.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState(false);
    const location = useLocation();

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
                    to="/join-as-developer"
                    className={({ isActive }) => (isActive ? "font-bold text-primary" : `${homeLocation ? `${navbarBackground ? "text-black" : "lg:text-white"}` : ""}`)}
                >
                    Join as Developer
                </NavLink>
            </li>
            <li>
                <Link
                    to="/login"
                    className="btn max-sm:btn-sm bg-primary text-white hover:bg-[#0d775dd7] font-semibold text-lg px-5 border-none">
                    Login
                </Link>
            </li>
            <li>
                <Link
                    to="/register"
                    className="btn max-sm:btn-sm bg-primary text-white hover:bg-[#0d775dd7] font-semibold text-lg px-5 border-none">
                    Register
                </Link>
            </li>
        </>
    );

    return (
        // <nav className=" px-4 py-3 shadow-md">
        <nav className={`sticky top-0 w-full z-10 px-4 py-3 transition-colors duration-300 ${navbarBackground ? "bg-white shadow-lg" : "bg-white lg:bg-transparent"
            }`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link className="flex items-center gap-1">
                    <img className="w-10 sm:w-16" src={logo} alt="MicroBucks Logo" />
                    <p className="text-3xl sm:text-5xl font-bold text-primary font-orbitron">
                        Micro<span className="font-medium ">Bucks</span>
                    </p>
                </Link>

                <div className="lg:hidden flex items-center gap-4">
                    {/* user icon  */}


                    {/* Menubar */}
                    <button
                        // className=" md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>


                {/* Desktop Links */}
                <ul className="hidden lg:flex space-x-6 text-lg items-center font-medium">
                    {navLinks}
                </ul>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={`mobile-menu lg:hidden overflow-hidden px-4 pb-1`}
            >
                <ul
                    className="space-y-2 mt-3"
                    onClick={() => setIsOpen(false)}
                >
                    {navLinks}
                </ul>
            </motion.div>
        </nav>
    );
};

export default Navbar;