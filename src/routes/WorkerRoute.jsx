import { Navigate, useLocation } from "react-router-dom";
import useAuthUser from "../hooks/useAuthUser";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const WorkerRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const { userData, authLoading } = useAuthUser();
    const location = useLocation();

    if (loading || authLoading) {
        return <div className='flex justify-center min-h-[80vh]'><span className="loading loading-ring loading-lg"></span></div>
    }

    if (user && userData.role === "worker") {
        return children;
    }

    return <Navigate to="/" state={location?.pathname}></Navigate>
    
};

WorkerRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default WorkerRoute;