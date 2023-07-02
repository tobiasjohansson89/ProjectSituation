import {useState, useEffect} from "react";

export default function useFetch(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] =useState(false);
    const [responseOk, setResponse] = useState(false);

    async function getData() {

        try {
            setLoading(true);
            setError(false);

            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            if (response.ok) {
                setResponse(true)
            }

        } catch (error) {
            console.log(error);
            setError(true);
        } finally {
            setLoading(false);
        }
    } 
    
    useEffect(
        () => {
            getData();
        }, [url]);

        return {data, loading, error, responseOk};
}

export async function usePost(postData) {
    const postOptions = {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
          'Content-Type': 'application/json'    
      }
    }
    await fetch("http://10.0.0.68:5000/add/", postOptions);
    console.log(postData)
}