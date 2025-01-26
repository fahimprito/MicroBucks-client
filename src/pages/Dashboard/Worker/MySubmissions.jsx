import { useState, useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MySubmissions = () => {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const fetchSubmissions = async () => {
            const res = await axiosSecure.get('/my-submissions');
            setSubmissions(res.data);
            setLoading(false);
        };

        fetchSubmissions();
    }, [axiosSecure]);

    if (loading) {
        return <div className='flex justify-center min-h-[50vh]'><span className="loading loading-ring loading-lg"></span></div>;
    }

    return (
        <div className="min-h-[50vh] my-6">
            <h2 className="text-2xl sm:text-3xl text-center font-bold mb-10">My Submissions</h2>
            {submissions.length > 0 ? (
                <div className="bg-white shadow-md">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-orange-100 text-left">
                                    <th className="px-4 py-2 border border-gray-300">#</th>
                                    <th className="px-4 py-2 border border-gray-300">Task Title</th>
                                    <th className="px-4 py-2 border border-gray-300">Buyer Name</th>
                                    <th className="px-4 py-2 border border-gray-300">Payable Amount</th>
                                    <th className="px-4 py-2 border border-gray-300">Submission Date</th>
                                    <th className="px-4 py-2 border border-gray-300">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {submissions.map((submission, index) => (
                                    <tr key={submission._id} className="hover:bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                                        <td className="border border-gray-300 p-2 max-w-72">{submission.task_title}</td>
                                        <td className="border border-gray-300 p-2">{submission.buyer_name}</td>
                                        <td className="border border-gray-300 p-2">{submission.payable_amount}</td>
                                        <td className="border border-gray-300 p-2">
                                            {new Date(submission.current_date).toLocaleDateString()}
                                        </td>
                                        <td
                                            className={`border border-gray-300 p-2 font-bold capitalize ${submission.status === "pending"
                                                ? "text-yellow-500"
                                                : submission.status === "approved"
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                                }`}
                                        >
                                            {submission.status}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-500 ">No submissions found.</p>
            )}


        </div>
    );
};

export default MySubmissions;