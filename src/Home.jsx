import React from 'react'
import { useState } from 'react';



const Home = () => {

  const [blogs, setBlog] = useState([
    { title: 'My new Website', body: 'lorem ipsum', author: 'a', id: 1 },
    { title: 'Welcome Party', body: 'lorem ipsum', author: 'b', id: 2 },
    { title: 'Web Dev Topics', body: 'lorem ipsum', author: 'c', id: 3 }
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  )
}

export default Home
