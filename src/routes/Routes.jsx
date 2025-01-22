import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Dashboard from "../layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About/About";
import ManageTask from "../pages/Dashboard/Admin/ManageTask";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import AdminHome from "../pages/Dashboard/Homes/AdminHome";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import BuyerHome from "../pages/Dashboard/Homes/BuyerHome";
import WorkerHome from "../pages/Dashboard/Homes/WorkerHome";
import WorkerRoute from "./WorkerRoute";
import DashboardHome from "../pages/Dashboard/Homes/DashboardHome";
import DashboardError from "../components/ErrorPage/DashboardError";
import TaskList from "../pages/Dashboard/Worker/TaskList";
import AddNewTasks from "../pages/Dashboard/Buyer/AddNewTasks";
import MyTasks from "../pages/Dashboard/Buyer/MyTasks";
import PurchaseCoin from "../pages/Dashboard/Buyer/PurchaseCoin";
import PaymentHistory from "../pages/Dashboard/Buyer/PaymentHistory";

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
        errorElement: <DashboardError></DashboardError>,
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
            {
                path: "/dashboard/addTask",
                element: <BuyerRoute><AddNewTasks></AddNewTasks></BuyerRoute>,
            },
            {
                path: "/dashboard/myTasks",
                element: <BuyerRoute><MyTasks></MyTasks></BuyerRoute>,
            },
            {
                path: "/dashboard/purchaseCoin",
                element: <BuyerRoute><PurchaseCoin></PurchaseCoin></BuyerRoute>,
            },
            {
                path: "/dashboard/paymentHistory",
                element: <BuyerRoute><PaymentHistory></PaymentHistory></BuyerRoute>,
            },
            
            // Worker routes
            {
                path: "/dashboard/workerHome",
                element: <WorkerRoute><WorkerHome></WorkerHome></WorkerRoute>,
            },
            {
                path: "/dashboard/taskList",
                element: <WorkerRoute><TaskList></TaskList></WorkerRoute>,
            },

        ]
    }
]);

export default router;