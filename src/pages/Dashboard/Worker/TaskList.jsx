import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import useTasks from "../../../hooks/useTasks";
import { FaCoins } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
    const [tasks, loading] = useTasks();
    const navigate = useNavigate();

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="min-h-[50vh]">

            <div className="flex mb-5 justify-center">
                <h2 className="text-3xl font-bold">All Available Tasks {tasks.length}</h2>
            </div>

            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {tasks.map((task) => (
                    <div key={task._id} className="card bg-white shadow-xl rounded-xl">
                        <img className="h-48 rounded-t-xl object-cover" src={task.task_image_url} alt="task image" />

                        <div className="flex flex-col h-full gap-1 p-4">
                            <h3 className="text-xl font-bold mb-2">{task.task_title}</h3>
                            <div className="text-gray-600 flex justify-between">
                                <strong>Buyer:</strong> <p>{task?.buyer_name}</p>
                            </div>
                            <div className="text-gray-600 flex justify-between">
                                <strong>Completion Date:</strong> <p>{new Date(task.completion_date).toLocaleDateString()}</p>
                            </div>
                            <div className="text-gray-600 flex justify-between">
                                <strong>Payable Amount:</strong> <p className="flex items-center gap-1">${task.payable_amount}<FaCoins /></p>
                            </div>
                            <div className="text-gray-600 flex justify-between flex-grow">
                                <strong>Required Workers:</strong> <p>{task.required_workers}</p>
                            </div>
                            <div>
                                <button
                                    className="btn btn-sm px-2 bg-primary hover:bg-secondary text-white hover:text-black font-semibold text-base hover:underline underline-offset-2 decoration-2 decoration-black"
                                    onClick={() => navigate(`/tasks/${task._id}`)}
                                >
                                    View Details  <MdKeyboardDoubleArrowRight />
                                </button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;