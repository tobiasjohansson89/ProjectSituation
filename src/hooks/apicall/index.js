import {useState, useEffect} from "react";

export default function useFetchl(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] =useState(false);

    async function getData() {

        try {
            setLoading(true);
            setError(false);

            const fetchData = await fetch(url);
            const json = await fetchData.json();
            setData(json);

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

        return {data, loading, error};
}