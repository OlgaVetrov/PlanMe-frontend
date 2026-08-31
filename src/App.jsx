import { useEffect, useState } from "react";
import "./App.css";
import { MyPlans } from "./MyPlans";
import { getAllPlans, addPlan, editPlan } from "../FetchPlans";

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
          />

          <button
            className="create-button"
            onClick={handleSubmit}
            disabled={!title.trim()}
          >
            {editing ? "Edit" : "Create"}
          </button>
        </div>

        <div className="plans-list">
          {myPlan.map((plan) => (
            <MyPlans
              key={plan._id}
              plan={plan}
              updatingInInput={updatingInInput}
              setPlan={setPlan}
              setTitle={setTitle}
              setEditing={setEditing}
            />
          ))}
        </div>

        <img className="bottom-image" src="/images/bottom.png" alt="" />
      </div>
    </div>
  );
}

export default App;
