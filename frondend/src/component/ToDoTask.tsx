import React from "react";
import {ITask} from "./Interfaces";

interface props {
    task: ITask;
}

const ToDoTask = ({task}:props) => {
    return (
    <div className="task">
        <div className="content">
            <span>{task.taskName}</span>
            <span>{task.deadline}</span>
        </div>
        <button>X</button>
    </div>
);
};

export default ToDoTask;