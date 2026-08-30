import { useEffect, useState } from "react";
import "./App.css";

import { MyPlans } from "./MyPlans";
import { getAllPlans, addPlan, editPlan, deletePlan } from "../FetchPlans";

function App() {
  const [myPlan, setPlan] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [planId, setPlanId] = useState("");

  useEffect(() => {
    getAllPlans(setPlan);
  }, []);

  const updatingInInput = (_id, title) => {
    setEditing(true);
    setTitle(title);
    setPlanId(_id);
  };

  const handleSubmit = () => {
    if (!title.trim()) return;

    if (editing) {
      editPlan(planId, title, setTitle, setPlan, setEditing);
    } else {
      addPlan(title, setTitle, setPlan);
    }
  };

  return (
    <div className="app">
      <div className="todo-container">
        <img className="top-image" src="/images/top.png" alt="" />

        <h1>Plan My Activities</h1>

        <div className="input-area">
          <input
            type="text"
            placeholder="Create an Activity"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />

          <button
            className="create-button"
            disabled={!title.trim()}
            onClick={handleSubmit}
          >
            {editing ? "Edit" : "Create"}
          </button>
        </div>

        <div className="plans-list">
          {myPlan.map((plan) => (
            <MyPlans
              text={plan.title}
              key={plan._id}
              updatingInInput={() => updatingInInput(plan._id, plan.title)}
              deletePlan={() =>
                deletePlan(plan._id, setPlan, setTitle, setEditing)
              }
            />
          ))}
        </div>

        <img className="bottom-image" src="/images/bottom.png" alt="" />
      </div>
    </div>
  );
}

export default App;
