import React from 'react';
import NavBar from './routes/navBar';
import HomePage from './routes/homePage';
import AuthPage from './routes/authPage';
import UserPage from './routes/userPage';
import AdminPage from './routes/adminPage';
import SignUp from './components/sign-up';

//import './App.css';
import {
  /* BrowserRouter as Router,  */ Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
};

export default App;
