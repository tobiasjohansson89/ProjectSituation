import { useState, useEffect } from 'react';

export default function CardDetails() {
    
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
console.log("cardDetails")
return (<div>
    {data.map((data) => { 
                return (<div className="card"key={data._id.$oid}>
                            <h2>{data.title}</h2>
                        </div>)
                        })
    }
       </div>)
    };