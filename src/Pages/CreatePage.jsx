import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('https://dummyjson.com/posts', { title })
      navigate('/posts')
    } catch (error) {
      console.error('Error creating post:', error)
    }
  }

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePost;