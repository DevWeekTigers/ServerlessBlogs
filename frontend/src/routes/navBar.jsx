import { Outlet, Link } from 'react-router-dom';
import '../App.css';
import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
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
} from './navBarElements';


const NavBar = () => {
  
  return (

    <div className="App">
      <div className="nav-container">
        <Link to="/">Home</Link>{' '}
        <Link to="/auth">Sign-In</Link>{' '}
        <Link to="/user">User</Link>{' '}
        <Link to="/admin">Admin</Link>{' '}
      </div>
      <Outlet />
    </div>
  );
  

  
};

export default NavBar;
