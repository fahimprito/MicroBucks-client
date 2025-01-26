import Swal from "sweetalert2";
import useAuthUser from "../../../hooks/useAuthUser";
import useTasks from "../../../hooks/useTasks";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";


const MyTasks = () => {
    const { userData, refetch: refetchAuthUser } = useAuthUser();
    const axiosSecure = useAxiosSecure();
    const [tasks, loading, refetch] = useTasks(userData.email);
    const [selectedTask, setSelectedTask] = useState(null);

    // Update task 
    const handleUpdate = (task) => {
        setSelectedTask(task);
        document.getElementById("update_modal").showModal(); // Open the modal
    };

    const handleCloseModal = () => {
        document.getElementById("update_modal").close();
        setSelectedTask(null);
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedTask = {
            task_title: formData.get("task_title"),
            task_detail: formData.get("task_detail"),
            submission_info: formData.get("submission_info"),
        };
        // console.log(updatedTask);


        await axiosSecure.patch(`/tasks/${selectedTask._id}`, updatedTask)
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Task updated successfully.",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    handleCloseModal();
                    refetch();
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to update the task.",
                        icon: "error"
                    });
                }
            });
    };

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
                                        refetchAuthUser();
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
        return <div className='flex justify-center min-h-[50vh]'><span className="loading loading-ring loading-lg"></span></div>;
    }

    return (
        <div className="min-h-[50vh]">
            <div className="flex justify-around mb-10 items-center">
                <h2 className="text-3xl font-bold">Your Added Tasks</h2>
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
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <tr key={task._id}>
                                    <td>{index + 1}</td>
                                    <td className="max-w-40 font-bold">{task.task_title}</td>
                                    <td className="overflow-hidden max-w-40">{task.task_detail.slice(0, 60)}...</td>
                                    <td>{task.required_workers}</td>
                                    <td>{task.payable_amount}</td>
                                    <td>{task.completion_date}</td>
                                    <td>
                                        <button
                                            className="btn btn-info btn-sm mr-1"
                                            onClick={() => handleUpdate(task)}
                                        >
                                            Update
                                        </button>
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


            {/* Update Modal */}
            <dialog id="update_modal" className="modal">
                {selectedTask && (
                    <form onSubmit={handleUpdateSubmit} className="modal-box">
                        <button
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                            onClick={handleCloseModal}
                        >
                            ✕
                        </button>
                        <h3 className="text-lg font-bold mb-4">Update task</h3>
                        <div className="mb-4">
                            <label className="label">Task Title</label>
                            <input
                                type="text"
                                name="task_title"
                                defaultValue={selectedTask?.task_title}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="label">Submission Info</label>
                            <input
                                type="text"
                                name="submission_info"
                                defaultValue={selectedTask?.submission_info}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="label">Task Detail</label>
                            <textarea
                                name="task_detail"
                                defaultValue={selectedTask?.task_detail}
                                className="textarea textarea-bordered w-full"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-info text-white text-lg w-full">
                            Update Task
                        </button>
                    </form>
                )}
            </dialog>
        </div>
    );
};

export default MyTasks;