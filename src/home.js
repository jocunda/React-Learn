import React, { useState,useEffect } from 'react';
import Bloglist from './blogList';

const Home = () => {
    const [blogs, setblogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
  
    const handleDelete = (id) => {
        const newblogs = blogs.filter(blog => blog.id !== id);
        setblogs(newblogs);
    }
   
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    console.log(res);
                    if (!res.ok) {
                        throw Error('could not fetch data');
                }
                return res.json()
            })
            .then(data => {
                setblogs(data);
                setIsPending(false);
                setError(null);
            })
                .catch(err => {
                    setIsPending(false);
                setError(err.message);
            })
        }, 1000);
        
    },[]);

    return (  
        <div className="home">
            {error && <div>{error}</div> }
            {isPending && <div>Loading..</div>}
            {blogs && <Bloglist blogs={blogs} title="All BLogs!" handleDelete={handleDelete} />}
                      
        </div>
    );
}
 
export default Home;