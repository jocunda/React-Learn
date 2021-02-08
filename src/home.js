import React, { useState,useEffect } from 'react';
import Bloglist from './blogList';

const Home = () => {
    const [blogs, setblogs] = useState([
        { title: 'My new website', body: 'lorem ipsum', author: 'mario', id: 1 },
        { title: 'Welcome party', body: 'lorem ipsum', author: 'yoshi', id: 2 },
        { title: 'Web dev tools', body: 'lorem ipsum', author: 'mario', id: 3 },
    ]);
  
    const handleDelete = (id) => {
        const newblogs = blogs.filter(blog => blog.id !== id);
        setblogs(newblogs);
    }
   
    useEffect(() => {
        console.log('use effect ran')
        console.log(blogs);
    });

    return (  
        <div className="home">
            <Bloglist blogs={blogs} title="All BLogs!" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;