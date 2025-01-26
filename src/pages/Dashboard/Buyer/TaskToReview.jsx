import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const TaskToReview = () => {
    const axiosSecure = useAxiosSecure();
    const [selectedSubmission, setSelectedSubmission] = useState(null);

    const { data: pendingSubmissions = [], refetch } = useQuery({
        queryKey: ['pendingSubmissions'],
        queryFn: async () => {
            const res = await axiosSecure.get("/pending-submissions");
            return res.data;
        }
    })

    const handleApprove = (submissionId) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: `You want to change approve this submission?`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#28a745",
                confirmButtonText: "Yes, Approve",
            }).then(async (result) => {
                if (result.isConfirmed) {

                    const res = await axiosSecure.patch(`/approve-submission/${submissionId}`);
                    if (res.data.modifiedCount > 0) {
                        Swal.fire("Success!", "Submission approved successfully.", "success");
                        refetch();
                    }
                }
            })


        } catch (error) {
            console.error("Failed to approve submission", error);
        }
    };

    const handleReject = async (submissionId, taskId) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: `You want to change Reject this submission?`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                confirmButtonText: "Yes, Reject",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    // console.log(submissionId, taskId);

                    const res = await axiosSecure.patch(`/reject-submission/${submissionId}`, {
                        taskId,
                    });
                    if (res.data.modifiedCount > 0) {
                        Swal.fire("Success!", "Submission rejected successfully.", "success");
                        refetch();
                    }
                }
            })

        } catch (error) {
            console.error("Failed to reject submission", error);
        }
    };

    return (
        <div>
            <h2 className="text-2xl sm:text-3xl text-center font-bold mb-10 mt-16">Task To Review</h2>
            {pendingSubmissions.length === 0 ? (
                <p className="text-center text-gray-500">No Pending Submissions found.</p>
            ) : (
                <div className="overflow-x-auto mt-8">
                    <table className="table table-pin-rows w-full">
                        <thead>
                            <tr className="text-base">
                                <th>#</th>
                                <th>Worker Name</th>
                                <th>Task Title</th>
                                <th>Payable Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingSubmissions.map((submission, index) => (
                                <tr key={submission._id} className="hover">
                                    <td>{index + 1}</td>
                                    <td>{submission.worker_name}</td>
                                    <td>{submission.task_title}</td>
                                    <td>{submission.payable_amount}</td>
                                    <td>
                                        <button
                                            className="btn btn-info btn-sm mr-2"
                                            onClick={() => setSelectedSubmission(submission)}
                                        >
                                            View Submission
                                        </button>
                                        <button
                                            className="btn btn-success btn-sm mr-2"
                                            onClick={() => handleApprove(submission._id)}
                                        >
                                            Approve
                                        </button>
                                        <button
                                            className="btn btn-error btn-sm"
                                            onClick={() =>
                                                handleReject(submission._id, submission.task_id)
                                            }
                                        >
                                            Reject
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            )}

            {/* Modal */}
            {selectedSubmission && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Submission Details</h3>
                        <p>
                            <strong>Worker Name:</strong> {selectedSubmission.worker_name}
                        </p>
                        <p>
                            <strong>Task Title:</strong> {selectedSubmission.task_title}
                        </p>
                        <p>
                            <strong>Payable Amount:</strong> ${selectedSubmission.payable_amount}
                        </p>
                        <p>
                            <strong>Submission Details:</strong> {selectedSubmission.submission_details}
                        </p>
                        <div className="modal-action">
                            <button
                                className="btn btn-primary"
                                onClick={() => setSelectedSubmission(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default TaskToReview;