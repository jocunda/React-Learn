import React, { useState,useEffect } from 'react';
import Bloglist from './blogList';
import useFecth from './useFetch';

const Home = () => {
    const { data:blogs, isPending, error } = useFecth('http://localhost:8000/blogs');
    
  
    // const handleDelete = (id) => {
    //     const newblogs = blogs.filter(blog => blog.id !== id);
    //     setblogs(newblogs);
    // }
   
   

    return (  
        <div className="home">
            {error && <div>{error}</div> }
            {isPending && <div>Loading..</div>}
            {blogs && <Bloglist blogs={blogs} title="All BLogs!" />}
                      
        </div>
    );
}
 
export default Home;