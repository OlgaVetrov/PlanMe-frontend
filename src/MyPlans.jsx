import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { deletePlan } from "../FetchPlans";

export const MyPlans = ({
  plan,
  updatingInInput,
  setPlan,
  setTitle,
  setEditing,
}) => {
  const handleEdit = () => {
    updatingInInput(plan._id, plan.title);
  };

  const handleDelete = () => {
    deletePlan(plan._id, setPlan, setTitle, setEditing);
  };

  return (
    <div className="plan-item">
      <div className="plan-content">
        <input type="checkbox" id={plan.title} />

        <label htmlFor={plan.title}>{plan.title}</label>
      </div>

      <div className="plan-actions">
        <AiFillEdit className="edit-icon" onClick={handleEdit} />

        <MdDelete className="delete-icon" onClick={handleDelete} />
      </div>
    </div>
  );
};
