import React, { useContext } from 'react';
import { UsersContext } from '../contexts/usersContext';
import '../App.css';

const Profile = () => {
  const { currentUser } = useContext(UsersContext);
  const {
    firstName,
    lastName,
    email,
    password /* profilePhoto */,
  } = currentUser;

  return (
    <div className="profile-container comp">
      <p>user profile</p>

      <div className="profile-photo">
        Profile Photo:{' '}
        <span role="img" aria-label="profile photo">
          🤪
        </span>
      </div>
      <div className="first-name">First name: {firstName}</div>
      <div className="last-name">Last name: {lastName}</div>
      <div className="email">email: {email}</div>
      <div className="password">Password: {password}</div>
    </div>
  );
};

export default Profile;
