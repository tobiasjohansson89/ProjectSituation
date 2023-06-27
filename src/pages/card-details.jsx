import Header from "../components/header";
import { TaskForm } from "../components/task-form";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
let task;

function getSingleCard() {
const queryString = document.location.search;
const param = new URLSearchParams(queryString);
const id = param.get("id")
    
const [data, setData] = useState([]);
const urlMongoDb = `http://10.0.0.68:5000/task/${id}`;

const getCard = async () => {
    const response = await fetch(urlMongoDb);
    setData(await response.json());
}

useEffect(() => {
    getCard()
}, []);

task = data;
//console.log(task)
}
const deleteTask = () => {
    return (
        <div>
            <p>Task{task.title} is deleted</p>
            <Link className="margin" to="/"><h2>`'-- Back</h2></Link>
        </div>

    )
}
export default function DetailsPage() {
    return (
    <div>
        <Header />
        {
        getSingleCard()
        }
        <main>
            <Link className="margin" to="/"><h2>Back <i className="fa-solid fa-backward-step"></i></h2></Link>
            <div className="form-container">
              <TaskForm></TaskForm>
            </div>
            <div className="single-card">
                <span className="material-symbols-outlined" ><i className="fa-solid fa-trash"></i></span>
                <h1 className="underline">{task.title}</h1>
                <p>Description: {task.description}</p>
                <p>Category: {task.category}</p>
                <p>Deadline: {task.deadline}</p>
                <p>Author: {task.author}</p>
            </div> 
        </main>
    </div>
    );
    }