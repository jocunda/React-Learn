import React, { useState, useEffect } from 'react';


const useFecth = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    console.log(res);
                    if (!res.ok) {
                        throw Error('could not fetch data');
                }
                return res.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
                .catch(err => {
                    setIsPending(false);
                setError(err.message);
            })
        }, 100);
        
    }, [url]);
    
    return{data,isPending,error}
}
 
export default useFecth;