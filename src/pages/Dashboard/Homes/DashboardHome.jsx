import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAuthUser from "../../../hooks/useAuthUser";

const DashboardHome = () => {
    const { user, loading } = useAuth()
    const { userData, authLoading } = useAuthUser();

    if (loading || authLoading) {
        return <div className='flex justify-center min-h-[80vh]'><span className="loading loading-ring loading-lg"></span></div>
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // home component based on role
    switch (userData?.role) {
        case "admin":
            return <Navigate to="/dashboard/adminHome" replace />;
        case "buyer":
            return <Navigate to="/dashboard/buyerHome" replace />;
        case "worker":
            return <Navigate to="/dashboard/workerHome" replace />;
        default:
            return <Navigate to="/login" replace />;
    }
};

export default DashboardHome;