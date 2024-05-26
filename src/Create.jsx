import React, { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    const blog = { title, body, author };
    

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new Blog added');
    })
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author</label>
        <select
          value={author} // Set the value of the select element
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="">Select Author</option> {/* Provide a default option */}
          <option value="a">a</option>
          <option value="b">b</option>
        </select>
        <button type='submit'>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
