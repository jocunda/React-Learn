import React, { useState,useEffect } from 'react';
import Bloglist from './blogList';

const Home = () => {
    const [blogs, setblogs] = useState(null);

    const [name, setName] = useState('mario');
  
    const handleDelete = (id) => {
        const newblogs = blogs.filter(blog => blog.id !== id);
        setblogs(newblogs);
    }
   
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
            return res.json()
            })
            .then((data) => {
                setblogs(data);
        })
    },[]);

    return (  
        <div className="home">
            {blogs && <Bloglist blogs={blogs} title="All BLogs!" handleDelete={handleDelete} />}
            
            <p>{name}</p>
        </div>
    );
}
 
export default Home;