import Lottie from "lottie-react";
import addTaskAnimation from "../../../assets/lottie/taskCheck.json"
import { useForm } from "react-hook-form";

const AddNewTasks = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        reset();

    }

    return (
        <div className="min-h-[50vh] grid md:grid-cols-2">
            <div className="w-11/12 mx-auto p-6 my-10 bg-base-200 rounded-xl border-2 border-secondary">
                <h1 className="text-2xl font-bold mb-5">Add New Task</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Task Title */}
                    <div>
                        <label className="block text-sm font-medium">Task Title</label>
                        <input
                            type="text"
                            name="task_title"
                            {...register("task_title", { required: "Task title is required" })}
                            className="input input-bordered w-full"
                        />
                        {errors.task_title && <p className="text-red-500 ml-2">{errors.task_title.message}</p>}
                    </div>

                    {/* Required Workers */}
                    <div>
                        <label className="block text-sm font-medium">Required Workers</label>
                        <input
                            type="number"
                            name="required_workers"
                            {...register("required_workers", {
                                required: "Number of required workers is required",
                                min: { value: 1, message: "Must be at least 1 worker" },
                            })}
                            className="input input-bordered w-full"
                        />
                        {errors.required_workers && <p className="text-red-500 ml-2">{errors.required_workers.message}</p>}
                    </div>

                    {/* Payable Amount */}
                    <div>
                        <label className="block text-sm font-medium">Payable Amount (per worker)</label>
                        <input
                            type="number"
                            name="payable_amount"
                            {...register("payable_amount", {
                                required: "Payable amount is required",
                                min: { value: 1, message: "Must be at least 1 coin" },
                            })}
                            className="input input-bordered w-full"
                        />
                        {errors.payable_amount && <p className="text-red-500 ml-2">{errors.payable_amount.message}</p>}
                    </div>

                    {/* Completion Date */}
                    <div>
                        <label className="block text-sm font-medium">Completion Date</label>
                        <input
                            type="date"
                            name="completion_date"
                            {...register("completion_date", { required: "Completion date is required" })}
                            className="input input-bordered w-full"
                        />
                        {errors.completion_date && <p className="text-red-500 ml-2">{errors.completion_date.message}</p>}
                    </div>

                    {/* Submission Info */}
                    <div>
                        <label className="block text-sm font-medium">Submission Info</label>
                        <input
                            type="text"
                            name="submission_info"
                            {...register("submission_info", { required: "Submission info is required" })}
                            className="input input-bordered w-full"
                        />
                        {errors.submission_info && <p className="text-red-500 ml-2">{errors.submission_info.message}</p>}
                    </div>

                    {/* Task Image URL */}
                    <div>
                        <label className="block text-sm font-medium">Task Image URL</label>
                        <input
                            type="file"
                            // accept="image/*"
                            {...register("task_image_url", { required: "Task image is required" })}
                            className="file-input file-input-bordered w-full"
                        />
                        {errors.task_image_url && <p className="text-red-500 ml-2">{errors.task_image_url.message}</p>}
                        {/* <input
                            type="text"
                            name="task_image_url"
                            {...register("task_image_url", { required: "Task image is required" })}
                            className="input input-bordered w-full"
                            required
                        /> */}
                    </div>

                    {/* Task Details */}
                    <div>
                        <label className="block text-sm font-medium">Task Details</label>
                        <textarea
                            name="task_detail"
                            {...register("task_detail", { required: "Task details are required" })}
                            className="textarea textarea-bordered w-full"
                            rows="4"
                        ></textarea>
                        {errors.task_detail && <p className="text-red-500 ml-2">{errors.task_detail.message}</p>}
                    </div>

                    {/* Add Task Button */}
                    <button type="submit" className="btn bg-primary text-white hover:bg-[#0d775dd7] font-semibold text-base px-5 border-none w-full">
                        Add Task
                    </button>
                </form>
            </div>

            <div className="max-md:hidden flex flex-col justify-center">
                <div className="mx-auto w-9/12">
                    <Lottie animationData={addTaskAnimation} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default AddNewTasks;