import ApprovedSubmissions from "../Worker/ApprovedSubmissions";
import WorkerStats from "../Worker/WorkerStats";


const WorkerHome = () => {
    return (
        <div className="min-h-[50vh]">
            <WorkerStats></WorkerStats>
            <ApprovedSubmissions></ApprovedSubmissions>
        </div>
    );
};

export default WorkerHome;