import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../App.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const defaultFormFields = {
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const navigate = useNavigate(); 

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, displayName, email, password, confirmPassword } =
    formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const RegisterUser =  (firstName, lastName, email, password, displayName) => {
    
    axios.post('http://localhost:5000/api/users/register',
           {
               firstName,
               lastName,
               displayName,
               email: email,
               password: password
           }
          
           )
       
       .then(data => {
         console.log(data.data);
         navigate('/');
       })
      
      .catch((err) => {
         console.log(err.message);
      });
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      // const test = () =>
      //   alert(`some asynchronous sign-up magic happens for ${email}`);
      // await setTimeout(test, 1000);
      // resetFormFields();


      RegisterUser(firstName, lastName, email, password, displayName);

    } catch (error) {
      switch (error.code) {
        // update error codes to match backend api
/*         case 'display-name-already-in-use':
          alert('Cannot create user, display name already in use');
          break;
        case 'email-already-in-use':
          alert('Cannot create user, email already in use');
          break; */
        default:
          console.log('error encountered during user creation', error);
      }
    }
  };
  return (
    <div className="authentication-page page" >
      <span><h3>Sign Up with your email and password</h3></span>
      <br/><br/>

      <form onSubmit={handleSubmit}>

      <InputGroup size="lg" >
        <InputGroup.Text id="inputGroup-sizing-lg">First Name</InputGroup.Text>
        <Form.Control
          aria-label="First Name"
          aria-describedby="inputGroup-sizing-sm"
          required
          name="firstName"
          value={firstName}
          onChange={handleChange}
          placeholder="first name"
        />
      
      </InputGroup>
      <br />

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Last Name</InputGroup.Text>
        <Form.Control
          aria-label="Last Name"
          aria-describedby="inputGroup-sizing-sm"
          required
          name="lastName"
          value={lastName}
          onChange={handleChange}
          placeholder="Last name"
        />
      
      </InputGroup>

      <br />
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Display Name</InputGroup.Text>
        <Form.Control
          aria-label="Display Name"
          aria-describedby="inputGroup-sizing-sm"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
          placeholder="Display name"
        />
      
      </InputGroup>


      <br />

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Email</InputGroup.Text>
        <Form.Control
          aria-label="Email"
          aria-describedby="inputGroup-sizing-sm"
          required
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="email"
        />
      
      </InputGroup>

      <br />
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Password</InputGroup.Text>
        <Form.Control
          aria-label="password"
          aria-describedby="inputGroup-sizing-sm"
          required
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="password"
        />
      
      </InputGroup>

      <br />
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Confirm Password</InputGroup.Text>
        <Form.Control
          aria-label="confirmPassword"
          aria-describedby="inputGroup-sizing-sm"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="confirmPassword"
        />
      
      </InputGroup>
      <br />
      <div className="d-grid gap-2">
      <Button variant="primary"  type="submit">Sign Up</Button>

      </div>
      </form>
    </div>
  );
};

export default SignUp;
