import React, { useState,useEffect } from 'react';
import Bloglist from './blogList';

const Home = () => {
    const [blogs, setblogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    
  
    const handleDelete = (id) => {
        const newblogs = blogs.filter(blog => blog.id !== id);
        setblogs(newblogs);
    }
   
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if (res.ok) {
                    
                }
                return res.json()
            })
            .then(data => {
                setblogs(data);
                setIsPending(false);
            })
            .catch(err => {
                console.log(err.message);
            })
        }, 1000);
        
    },[]);

    return (  
        <div className="home">
            {isPending && <div>Loading..</div>}
            {blogs && <Bloglist blogs={blogs} title="All BLogs!" handleDelete={handleDelete} />}
                      
        </div>
    );
}
 
export default Home;