
import React from "react";
import Button from "./Button";
import { taskStyles } from "../Styles/style";


const Task = ({ task, index, completeTask, removeTask }) => {
  return (
    <div style={taskStyles}>
      <span style={{ textDecoration: task.completed ? "line-through" : "none" ,
        opacity: task.completed? 0.3 : 1,
      }}>
        {task.text}
      </span>
      <div>
        <Button
          text={task.completed ? "undo" : "Done"}
          onClick={() => completeTask(index)}
        />
        <Button
          text="Remove"
          onClick={() => removeTask(index)}
        />
      </div>
    </div>
  );
};


export default Task;

