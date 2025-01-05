import React, { useState } from "react";
import "../App.css";
const TodoInput = ({ Addtodo }) => {
  const [addtask, setAddTask] = useState("");

  const handleTask = () => {
    if (addtask.trim()) {
      Addtodo(addtask);
      setAddTask("");
    }
  };

  return (
    <>
      <div>
        <input
          className="input-task"
          type="text"
          placeholder="Add new Task"
          value={addtask}
          onChange={(e) => setAddTask(e.target.value)}
        />
        <button className="button-add" onClick={handleTask}>
          Add Task
        </button>
      </div>
    </>
  );
};

export default TodoInput;
