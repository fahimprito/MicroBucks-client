import useTasks from "../../../hooks/useTasks";


const ManageTask = () => {
    const [tasks, loading] = useTasks();

    if (loading) {
        return <p>Loading...</p>;
    }
    console.log(tasks);
    

    return (
        <div className="min-h-[50vh]">
            <div className="flex justify-around mb-10 items-center">
                <h2 className="text-3xl font-bold">All Users</h2>
                <h2 className="text-3xl font-bold">Total Tasks: {tasks.length}</h2>
            </div>

            ManageTask
        </div>
    );
};

export default ManageTask;