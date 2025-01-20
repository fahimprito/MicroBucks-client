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
                element: <About></About>,
            },
            {
                path: "/dashboard/ManageTask",
                element: <ManageTask></ManageTask>,
            },
        ]
    }
]);

export default router;