import React, { useContext } from 'react';
import { UsersContext } from '../contexts/usersContext';
import { Outlet, Link } from 'react-router-dom';
import '../App.css';
/* import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MemoryRouter, Route } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import { Switch } from "react-router";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navBarElements'; */

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
