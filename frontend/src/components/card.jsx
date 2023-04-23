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

    let title;
    let description;
    for(let i = 0; i < data.length; i++) {
        title = data[i].title;
        description = data[i].description
    }

    console.log(data)
            return (
            <>
            <div className="card">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            </>
            );
    }