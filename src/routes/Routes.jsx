import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Dashboard from "../layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About/About";
import ManageTask from "../pages/Dashboard/ManageTask/ManageTask";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AdminHome from "../pages/Dashboard/Homes/AdminHome";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import BuyerHome from "../pages/Dashboard/Homes/BuyerHome";
import WorkerHome from "../pages/Dashboard/Homes/WorkerHome";
import WorkerRoute from "./WorkerRoute";
import DashboardHome from "../pages/Dashboard/Homes/DashboardHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/dashboard",
                element: <DashboardHome></DashboardHome>,
            },

            // admin routes
            {
                path: "/dashboard/adminHome",
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
            },
            {
                path: "/dashboard/manageUsers",
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>,
            },
            {
                path: "/dashboard/manageTask",
                element: <AdminRoute><ManageTask></ManageTask></AdminRoute>,
            },

            // buyer routes
            {
                path: "/dashboard/buyerHome",
                element: <BuyerRoute><BuyerHome></BuyerHome></BuyerRoute>,
            },
            
            // Worker routes
            {
                path: "/dashboard/workerHome",
                element: <WorkerRoute><WorkerHome></WorkerHome></WorkerRoute>,
            },

        ]
    }
]);

export default router;