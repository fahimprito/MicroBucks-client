import Swal from "sweetalert2";
import useTasks from "../../../hooks/useTasks";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageTask = () => {
    const [tasks, loading, refetch] = useTasks();
    const axiosSecure = useAxiosSecure();

    // delete task 
    const handleDelete = async (task) => {
        const refillAmount = task.required_workers * task.payable_amount;

        Swal.fire({
            title: `Delete Task`,
            text: `Deleting this task will refund ${refillAmount} coins to your balance. Do you want to proceed?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonColor: '#d33',
        }).then(async (result) => {
            if (result.isConfirmed) {
                // Process the refund
                await axiosSecure.patch('/refund-coins', {
                    taskId: task._id,
                    amount: refillAmount,
                })
                    .then(async (res) => {
                        if (res.data.modifiedCount > 0) {
                            // Delete the task
                            await axiosSecure.delete(`/tasks/${task._id}`)
                                .then((deleteRes) => {
                                    if (deleteRes.data.deletedCount) {
                                        refetch();
                                        // refetchAuthUser();
                                        Swal.fire({
                                            title: "Deleted!",
                                            text: 'Task has been deleted.',
                                            icon: "success"
                                        });
                                    }
                                })
                        }
                    })

            }
        });
    };


    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="min-h-[50vh]">
            <div className="flex justify-around mb-10 items-center">
                <h2 className="text-3xl font-bold">Manage All Tasks</h2>
                <h2 className="text-3xl font-bold">Total Tasks: {tasks.length}</h2>
            </div>

            {tasks.length === 0 ? (
                <p className="text-center text-gray-500">No tasks found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table sm:table-lg w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Details</th>
                                <th>Required Workers</th>
                                <th>Payable Amount</th>
                                <th>Completion Date</th>
                                <th>Added By</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <tr key={task._id}>
                                    <td>{index + 1}</td>
                                    <td className="max-w-40 font-bold">{task.task_title}</td>
                                    <td className="max-w-40">{task.task_detail.slice(0, 60)}...</td>
                                    <td>{task.required_workers}</td>
                                    <td>{task.payable_amount}</td>
                                    <td>{task.completion_date}</td>
                                    <td>{task.buyer_email}</td>
                                    <td>
                                        <button
                                            className="btn btn-error btn-sm"
                                            onClick={() => handleDelete(task)}
                                        >
                                            Delete
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

export default ManageTask;