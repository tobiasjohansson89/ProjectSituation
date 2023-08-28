import { TaskForm } from "../components/task-form";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useTasksContext } from "../hooks/usecontext";

export default function DetailsPage() {

    const { dispatch } = useTasksContext();

    const [data, setData] = useState({});
    const navigate = useNavigate();
    
    const deleteTask = async () => {
        const queryString = document.location.search;
        const param = new URLSearchParams(queryString);
        const id = param.get("id")
        const urlMongoDbdelete = `http://10.0.0.68:5000/delete/${id}`;
        const response = await fetch(urlMongoDbdelete, {method: 'DELETE'})

        const deleteTask = {
            title: data.title,
            description: data.description,
            category: data.category,
            deadline: data.deadline,
            author: data.author,
            status: data.status,
            _id: {$oid: id},
          }
        const json = JSON.stringify(deleteTask)

        if(response.ok) {
            dispatch({type: "DELETE_TASK", payload: json})
            console.log(response)
        }
        if(!response.ok) {
            console.log(response)
        }
    }

    const deleteCard = () => {

        const deleteMessage = {title: "TASK DELETED"}
        setData(deleteMessage);
        deleteTask();
        setTimeout(
            () => {
                navigate(`/`);
            }, 1000
        );
    }

    try {

        const queryString = document.location.search;
        const param = new URLSearchParams(queryString);
        const id = param.get("id");
    
        const doFetch = async () => {
            const urlMongoDb = `http://10.0.0.68:5000/task/${id}`;
            const response = await fetch(urlMongoDb);
            const json = await response.json();
            return json;
        }
    
        const getCard = async () => {

            let myData = await doFetch()
            setData(myData);
        }
    
        useEffect(() => {
            getCard()
        }, []);

        if(data) {

            return (
                <div>
                    <main>
                        <Link className="margin" to="/"><h2>Back <i className="fa-solid fa-backward-step"></i></h2></Link>
                        <div className="form-container">
                          <TaskForm></TaskForm>
                        </div>
                        <div className="single-card">
                            <div className="material-symbols-outlined" onClick={deleteCard}><i className="fa-solid fa-trash"></i></div>
                            <h1 className="underline">{data.title}</h1>
                            <h2>Description</h2>
                            <p>{data.descriptions}</p>
                            <div className="flex-wrap">
                                <h2>Estimated price </h2>
                                <p>: ${data.price}</p>
                            </div>
                            <div className="flex-wrap">
                                <h2>Category </h2>
                                <p>: {data.category}</p>
                            </div>
                            <div className="flex-wrap">
                                <h2>Deadline </h2>
                                <p>: {data.deadline}</p>
                            </div>
                            <div className="flex-wrap">
                                <h2>Author </h2>
                                <p>: {data.author}</p>
                            </div>
                            <div className="flex-wrap">
                                <h2>Status </h2>
                                <p>: {data.status}</p>
                            </div>
                            <h2>Urls</h2>
                            <a href={data.urls}>{data.urls}</a>
                        </div> 
                    </main>
                </div>
                );
        }

        else {

            return(
                <div>
                    <Header/>
                    <TaskForm/>
                    <h1>Card deleted or not found</h1>
                </div>
            )
        }

    } catch(error) {

        return(
            <div>
                <Header />
                <main>
                    <h1>Error</h1>
                    <p>{error}</p>
                </main>
            </div>)
        }
}