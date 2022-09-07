import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UsersContext } from '../contexts/usersContext';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import axios from 'axios';

import '../App.css';
import { API_ENDPOINT } from '../config';
const defaultNewPostFields = {
  title: '',
  category: '',
  description: '',
};

const NewPost = () => {
  const navigate = useNavigate();

  const [newPost, setNewPost] = useState(defaultNewPostFields);
  const { title, category, description } = newPost;

  const { currentUser } = useContext(UsersContext);
  const user = currentUser._id;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const submitNewPost = (title, category, description, user) => {
    console.log('Inside submitNewPost - title, category, description, user :>> ', 
      title, category, description, user);
    
    let token = JSON.parse(localStorage.getItem('token'));

    console.log(token)
    const config = {
      headers: { 
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${token}`  }
        //"Authorization": `Bearer ${token}` }
   };

   

    axios
      .post( API_ENDPOINT + '/api/posts', {
        title: title,
        category: category,
        description: description,
        user: user
      }, config)
      .then((data) => {
        console.log(data.data);
        navigate('/');
      })

      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      submitNewPost(title, category, description, user)
    } catch (error) {
      console.log('error encountered during new post submission', error);
    }
  };

  return (
    <div className="new-post-container comp">
      <p>Create a new post</p>
      <form onSubmit={handleSubmit}>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">Title</InputGroup.Text>
          <Form.Control
            aria-label="Title"
            aria-describedby="inputGroup-sizing-sm"
            required
            name="title"
            value={title}
            onChange={handleChange}
          />
        </InputGroup>
        <br />
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">Category</InputGroup.Text>
          <Form.Control
            aria-label="Category"
            aria-describedby="inputGroup-sizing-sm"
            required
            name="category"
            value={category}
            onChange={handleChange}
          />
        </InputGroup>
        <br />
        <InputGroup size="lg">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="New post"
            aria-label="New post"
            aria-describedby="inputGroup-sizing-sm"
            required
            name="description"
            value={description}
            onChange={handleChange}
          ></Form.Control>
        </InputGroup>
        <Button type="submit" onSubmit={handleSubmit}>
          Publish
        </Button>
      </form>
    </div>
  );
};

export default NewPost;
