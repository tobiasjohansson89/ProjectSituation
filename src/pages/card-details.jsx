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
const deleteTask = async () => {
    
    const queryString = document.location.search;
    const param = new URLSearchParams(queryString);
    const id = param.get("id")
    

    const urlMongoDbdelete = `http://10.0.0.68:5000/delete/${id}`;
    const response = await fetch(urlMongoDbdelete, {method: 'DELETE'})
    console.log(response)

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
                <div className="material-symbols-outlined" onClick={deleteTask}><i className="fa-solid fa-trash"></i></div>
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