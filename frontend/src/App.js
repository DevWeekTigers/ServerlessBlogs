import React from 'react';
import NavBar from './routes/navBar';
import HomePage from './routes/homePage';
import UserPage from './routes/userPage';
import AdminPage from './routes/adminPage';
import SignUp from './routes/sign-up';
import SignIn from './routes/sign-in';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
