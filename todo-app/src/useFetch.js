import { useEffect,useState } from "react";
const useFetch = (url) => {
    const [data,setData] =useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] =useState(null);

    useEffect(() => {
        //npx json-server --watch data/db.json --port 3001 (in separate terminal)
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    // console.log(res);
                    if(!res.ok){
                        throw Error('could not fetch the data from that resource');
                    }
                    return res.json();
                })
                .then((data) => {
                    // console.log(data);
                    setError(null);
                    setData(data);
                    setIsPending(false);
                })
                .catch((err) => {
                    setIsPending(false);
                    setError(err.message);
                    // console.log(err.message);
                })
        },1000);
        // fetch('http://localhost:3001/blogs ')
        // .then(res => {
        //     return res.json();
        // })
        // .then((data) => {
        //     // console.log(data);
        //     setBlogs(data);
        //     setIsPending(false);
        // })
        // console.log('use effect ran');
        // console.log(name);

    },[url]);
    return {data,isPending,error}
}
export default useFetch;