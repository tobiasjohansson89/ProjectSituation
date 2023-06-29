import React, { useState, useEffect } from 'react';
import { usePost } from '../hooks/apicall';

export function TaskForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [deadline, setDeadline] = useState('');
    const [author, setAuthor] = useState('');
  
    const handleSubmit = (event) => {

      event.preventDefault();
      const newTask = {
        title,
        description,
        category,
        deadline,
        author
      }
      usePost(newTask);

      setTitle("");
      setDescription("");
      setCategory("");
      setDeadline("");
      setAuthor("");
    };

    function close() {
      const form = document.querySelector("form")
      form.style.display = "none"
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <p onClick={close} className='close-btn'>Close X</p>
        <div className="form-field">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
  
        <div className="form-field">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
  
        <div className="form-field">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>
  
        <div className="form-field">
          <label htmlFor="deadline">Deadline:</label>
          <input
            type="date"
            id="deadline"
            value={deadline}
            onChange={(event) => setDeadline(event.target.value)}
          />
        </div>
  
        <div className="form-field">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
  
        <button type="submit">Submit</button>
      </form>
    );
  }