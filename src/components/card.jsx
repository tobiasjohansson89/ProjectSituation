import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/apicall';

export default function Card() {

    const urlMongoDb = "http://10.0.0.68:5000/tasks";
    const dummyApi = "https://dummyjson.com/products";
    
    const { data, loading, error, responseOk } = useFetch(urlMongoDb);
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState("");

    const searchFilter = () => {
        const currentTasks = [...tasks];
        const filteredTasks = data.filter((value) => {
            return value.title.toLowerCase().includes(search.toLowerCase());
        });
        if(filteredTasks.length === 0) {
            setTasks(currentTasks)
        }
        setTasks(filteredTasks);
    }
    useEffect(() => {
        searchFilter();
    }, [search]);

    if(tasks.length === 0) {
        return(
            <div className='cards-container'>
            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong</p>}
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
            {data.map((data) => { 
                return (
                  <Link to={`detailspage?id=${data._id.$oid}`} key={data._id.$oid}>
                        <div className="card" >
                                <h2>{data.title}</h2>
                                <p>{data.deadline}</p>
                        </div>
                  </Link>
                )
            })
            }
        </div>
        )
    }
    if (tasks.length > 0) {
        return(
            <div className='cards-container'>
            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong</p>}
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
            {tasks.map((data) => { 
                return (
                  <Link to={`detailspage?id=${data._id.$oid}`} key={data._id.$oid}>
                        <div className="card" >
                                <h2>{data.title}</h2>
                                <p>{data.deadline}</p>
                        </div>
                  </Link>
                )
            })
            }
        </div>
        )
    }
}