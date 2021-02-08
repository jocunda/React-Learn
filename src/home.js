import React, { useState } from 'react';
import Bloglist from './blogList';

const Home = () => {
    const [blogs, setblogs] = useState([
        { title: 'My new website', body: 'lorem ipsum', author: 'mario', id: 1 },
        { title: 'Welcome party', body: 'lorem ipsum', author: 'yoshi', id: 2 },
        { title: 'Web dev tools', body: 'lorem ipsum', author: 'mario', id: 3 },
    ]);
  
   
    return ( 
        <div className="home">
            <Bloglist blogs={blogs} title="All BLogs!" />
            <Bloglist blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's BLogs!"/>
        </div>
    );
}
 
export default Home;