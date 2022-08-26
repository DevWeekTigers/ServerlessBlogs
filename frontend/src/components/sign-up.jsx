import { useState } from 'react';

import '../App.css';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      const test = () =>
        alert(`some asynchronous sign-up thing happens for ${email}`);
      await setTimeout(test, 1000);
      resetFormFields();
    } catch (error) {
      if (error.code === 'email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('error encountered during user creation', error);
      }
    }
  };

  return (
    <div className="sign-up-container comp">
      <p>this is the sign-up container</p>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <input
          label="Display Name"
          type="text"
          required
          name="displayName"
          placeholder='display name'
          value={displayName}
          onChange={handleChange}
        />

        <input
          label="Email"
          type="email"
          required
          name="email"
          placeholder='email'
          value={email}
          onChange={handleChange}
        />

        <input
          label="Password"
          type="password"
          required
          name="password"
          placeholder='password'
          value={password}
          onChange={handleChange}
        />

        <input
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          placeholder='confirm password'
          value={confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
