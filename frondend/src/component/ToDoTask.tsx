import React from "react";
import {ITask} from "./Interfaces";

interface props {
    task: ITask;
}

const ToDoTask = ({task}:props) => {
    return <div>{task.taskName}</div>;

};

export default ToDoTask;