import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UsersContext } from '../contexts/usersContext';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import axios from 'axios';

import '../App.css';

const defaultSignInFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const navigate = useNavigate();
  const [signInFormFields, setSignInFormFields] = useState(
    defaultSignInFormFields
  );

  const { email, password } = signInFormFields;
  const { setCurrentUser } = useContext(UsersContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignInFormFields({ ...signInFormFields, [name]: value });
  };

  const UserLogin = (email, password) => {
    axios
      .post('http://localhost:8080/api/users/login', {
        email: email,
        password: password,
      })

      .then((data) => {
        localStorage.setItem('token', JSON.stringify(data.data.token));
        setCurrentUser(data.data);
        navigate('/');        
      })

      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      UserLogin(email, password);
    } catch (error) {
      console.log(error);

      switch (error.code) {
        // update error codes to match backend api
        /*         case 'wrong-password':
          alert('incorrect password for email');
          break;
        case 'user not found':
          alert('no user associated with this email.');
          break; */
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-page page">
      <span>
        <h3>Sign in with your email and password</h3>
      </span>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">Email</InputGroup.Text>
          <Form.Control
            aria-label="Email"
            aria-describedby="inputGroup-sizing-sm"
            required
            name="email"
            value={email}
            onChange={handleChange}
          />
        </InputGroup>

        <br />

        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">Password</InputGroup.Text>
          <Form.Control
            aria-label="Password"
            aria-describedby="inputGroup-sizing-sm"
            required
            name="password"
            value={password}
            onChange={handleChange}
          />
        </InputGroup>
        <br />

        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" type="submit">
            Sign In
          </Button>
        </div>
      </form>
      <br />
      <h3>
        Don't have an account yet? <Link to="/signUp">Sign Up</Link> here
      </h3>
    </div>
  );
};

export default SignIn;
