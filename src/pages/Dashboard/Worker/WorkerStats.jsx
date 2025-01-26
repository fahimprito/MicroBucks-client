import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const WorkerStats = () => {
    const [stats, setStats] = useState({
        totalSubmissions: 0,
        totalPendingSubmissions: 0,
        totalEarnings: 0,
    });
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const fetchStats = async () => {
            const res = await axiosSecure.get("/worker-stats");
            setStats(res.data);
        };

        fetchStats();
    }, [axiosSecure]);

    return (
        <div className="stats stats-vertical md:stats-horizontal shadow w-full">
            <div className="stat">
                <div className="stat-title text-xl font-semibold">Total Submissions</div>
                <div className="stat-value text-blue-500">{stats.totalSubmissions}</div>
                <div className="stat-desc">All tasks submitted</div>
            </div>

            <div className="stat">
                <div className="stat-title text-xl font-semibold">Pending Submissions</div>
                <div className="stat-value text-green-500">{stats.totalPendingSubmissions}</div>
                <div className="stat-desc">Awaiting approval</div>
            </div>

            <div className="stat">
                <div className="stat-title text-xl font-semibold">Total Earnings</div>
                <div className="stat-value text-purple-500">${stats.totalEarnings}</div>
                <div className="stat-desc">Approved submissions</div>
            </div>
        </div>
    );
};

export default WorkerStats;