import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export const MyPlans = ({ text, updatingInInput, deletePlan }) => {
  return (
    <div className="plan-item">
      <div className="plan-content">
        <input type="checkbox" id={text} />

        <label htmlFor={text}>{text}</label>
      </div>

      <div className="plan-actions">
        <AiFillEdit className="edit-icon" onClick={updatingInInput} />

        <MdDelete className="delete-icon" onClick={deletePlan} />
      </div>
    </div>
  );
};
