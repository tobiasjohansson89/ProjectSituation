import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
let ids = [];
let id;
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

return (<div className='cards-container'>
    {data.map((data) => { 
                return (
                <Link to={`DetailsPage?id=${data._id.$oid}`} key={data._id.$oid}>
                          <div className="card" >
                             <h2>{data.title}</h2>
                             <p>{data.description}</p>
                             <p>{data.category}</p>
                             <p>{data.deadline}</p>
                             <p>{data.author}</p>
                          </div>
                </Link>)
                        })
    }
       </div>)
    };