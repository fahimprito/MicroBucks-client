import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            MainLayouts
        </div>
    );
};

export default MainLayouts;