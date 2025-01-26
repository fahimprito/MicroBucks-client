import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const AdminWithdrawRequests = () => {
    const axiosSecure = useAxiosSecure();

    const { data: withdrawals = [], isPending, refetch } = useQuery({
        queryKey: ['withdrawals'],
        queryFn: async () => {
            const res = await axiosSecure.get("/withdrawals?status=pending");
            return res.data;
        }
    })

    const handleApprove = async (id) => {
        Swal.fire({
            title: "Approve Withdrawal?",
            text: "Once approved, the user will get the payment.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Approve",
            cancelButtonColor: "#d33",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axiosSecure.patch(`/withdrawals/${id}/approve`)
                        .then(res => {
                            // console.log(res);
                            
                            if (res.data.message === 'Withdrawal approved and payment information recorded') {
                                Swal.fire("Approved!", "The withdrawal request has been approved.", "success");
                                refetch();
                            }
                        }).catch(error => {
                            console.error(error);
                            Swal.fire("Error!", "Failed to approve the withdrawal.", "error");
                        })

                } catch (error) {
                    console.error(error);
                    Swal.fire("Error!", "Failed to approve the withdrawal.", "error");
                }
            }
        });
    };

    if (isPending) {
        return <div className='flex justify-center min-h-[50vh]'><span className="loading loading-ring loading-lg"></span></div>;
    }

    return (
        <div>
            <h2 className="text-2xl sm:text-3xl text-center font-bold mb-10 mt-16">Payment Withdraw Request</h2>
            {withdrawals.length === 0 ? (
                <p className="text-center text-gray-500">No Pending Submissions found.</p>
            ) : (
                <div className="overflow-x-auto mt-8">
                    <table className="table table-pin-rows w-full">
                        <thead>
                            <tr className="text-base">
                                <th>#</th>
                                <th>Worker Name</th>
                                <th>Worker Email</th>
                                <th>Withdrawal Coin</th>
                                <th>Withdrawal Amount ($)</th>
                                <th>Payment System</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {withdrawals.map((withdrawal, index) => (
                                <tr key={withdrawal._id}>
                                    <th>{index + 1}</th>
                                    <td>{withdrawal.worker_name}</td>
                                    <td>{withdrawal.worker_email}</td>
                                    <td>{withdrawal.withdrawal_coin}</td>
                                    <td>{withdrawal.withdrawal_amount}</td>
                                    <td>{withdrawal.payment_system}</td>
                                    <td>
                                        <button
                                            className="btn bg-primary text-white hover:bg-[#0d775dd7]"
                                            onClick={() => handleApprove(withdrawal._id)}
                                        >
                                            Approve
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            )}

        </div>
    );
};

export default AdminWithdrawRequests;