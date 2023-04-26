import Header from "../components/header";
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

export default function DetailsPage() {
    return (
    <div>
        <Header />
        {
        getSingleCard()
        }
        <main>
            <Link className="margin" to="/frontend/"><h2>`'-- Back</h2></Link>
            <div className="single-card">
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