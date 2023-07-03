import React from "react";
import { Link } from "react-router-dom";

export default function TasksList({ task }) {

    return(
        <li className="tasks-list">
            <Link  to={`detailspage?id=${task._id.$oid}`} key={task._id.$oid}>
                <div className="card">
                <h2>{task.title}</h2>
                <p>{task.deadline}</p>
                </div>
            </Link>
        </li>
    )
}