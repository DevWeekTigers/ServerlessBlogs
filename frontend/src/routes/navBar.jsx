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
<<<<<<< HEAD
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            User Blogs
          </NavLink>
          <NavLink to='/admin' activeStyle>
            Admin
          </NavLink>
         
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign-In/Sign-Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
=======
    <div className="App">
      <div className="nav-container">
        <Link to="/">Home</Link>{' '}
        <Link to="/auth">Sign-In</Link>{' '}
        <Link to="/user">User</Link>{' '}
        <Link to="/admin">Admin</Link>{' '}
      </div>
      <Outlet />
    </div>
>>>>>>> 8f7cd5caa8cf5bc9afc3e1f83c613f3f0ace4710
  );
  

  
};

export default NavBar;
