import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../App.css';

const defaultNewPostFields = {
  title: '',
  category: '',
  description: '',
};

const NewPost = () => {
  const [newPost, setNewPost] = useState(defaultNewPostFields);
  const { title, category, description } = newPost;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = () => {
    // write some async func here
    console.log('you clicked publish!');
  };

  return (
    <div className="new-post-container comp">
      <p>this is the NewPost container</p>
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
          publish
        </Button>
      </form>
    </div>
  );
};

export default NewPost;
