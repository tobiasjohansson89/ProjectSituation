import { useState, useEffect } from 'react';

export default function Card() {
    
    const [data, setData] = useState([]);
    const urlMongoDb = "http://10.0.0.68:5000/tasks";
    const dummyApi = "https://dummyjson.com/products";

    const getData = async () => {
        const response = await fetch(urlMongoDb);
        setData(await response.json());
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div>
        {data.map((data) => { 
            return (   
                <div className="card"key={data._id.$oid}>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <p>{data.category}</p>
                    <p>{data.deadline}</p>
                    <p>{data.author}</p>
                </div> 
            )

        })}


        </div>


    )}