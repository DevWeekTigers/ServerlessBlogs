import React, { useContext } from 'react';
import { UsersContext } from '../contexts/usersContext';
import { Outlet, Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
  const { currentUser } = useContext(UsersContext);

  return (
    <div className="App">
      <div className="nav-container">
        <Link to="/">Home</Link> <Link to="/signIn">Sign-In</Link>{' '}
        <Link to="/user">User</Link>{' '}
        {currentUser.isAdmin && <Link to="/admin">Admin</Link>}{' '}
        {currentUser.firstName && (
          <span>Welcome, {currentUser.firstName}!</span>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
