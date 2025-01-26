import BuyerStats from "../Buyer/BuyerStats";
import TaskToReview from "../Buyer/TaskToReview";


const BuyerHome = () => {
    return (
        <div className="min-h-[50vh]">
            <BuyerStats></BuyerStats>
            <TaskToReview></TaskToReview>
        </div>
    );
};

export default BuyerHome;