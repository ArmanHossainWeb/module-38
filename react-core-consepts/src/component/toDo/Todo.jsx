import React from "react";
import "./Todo.css";

const Todo = ({ task, isDone }) => {
  return(
    <div>
      {isDone ? <li>Done: {task}</li>: <li>Not Done: {task}</li>}
    </div>
  )
};

export default Todo;
