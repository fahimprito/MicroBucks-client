import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AdminWithdrawRequests from "../Admin/AdminWithdrawRequests";

const AdminHome = () => {
    const [stats, setStats] = useState({
        totalWorkers: 0,
        totalBuyers: 0,
        totalAvailableCoins: 0,
        totalPayments: 0,
    });
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const fetchStats = async () => {
            const res = await axiosSecure.get("/admin-stats");
            setStats(res.data);
        };

        fetchStats();
    }, [axiosSecure]);

    return (
        <div className="min-h-[50vh]">
            <div>
                <div className="stats stats-vertical md:stats-horizontal shadow w-full">
                    <div className="stat">
                        <div className="stat-title text-xl font-semibold">Total Workers</div>
                        <div className="stat-value text-blue-500">{stats.totalWorkers}</div>
                        <div className="stat-desc">Active on the platform</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title text-xl font-semibold">Total Buyers</div>
                        <div className="stat-value text-green-500">{stats.totalBuyers}</div>
                        <div className="stat-desc">Contributing tasks</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title text-xl font-semibold">Total Available Coins</div>
                        <div className="stat-value text-yellow-500">{stats.totalAvailableCoins}</div>
                        <div className="stat-desc">Distributed across users</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title text-xl font-semibold">Total Payments</div>
                        <div className="stat-value text-purple-500">${stats.totalPayments}</div>
                        <div className="stat-desc">All-time</div>
                    </div>
                </div>
            </div>

            <div>
                <AdminWithdrawRequests></AdminWithdrawRequests>
            </div>
        </div>

    );
};

export default AdminHome;