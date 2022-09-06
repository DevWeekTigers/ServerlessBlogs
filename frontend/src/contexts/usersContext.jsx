import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UsersContext = createContext({
  users: [],
  setUsers: () => {},
  currentUser: {},
  setCurrentUser: () => {},
});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const getUsersData = async () => {
    const users = (await axios.get('http://localhost:5000/api/users')).data;
    console.log('inside UserProvider.getUsersData - users :>> ', users);
    setUsers(users);
  };

// get all users data when component initializes
  useEffect(() => {
    getUsersData();
  }, []);

  // if local storage contains 'currentUser', set currentUser
useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  if (storedUser/* Object.keys(storedUser).length */) { setCurrentUser(storedUser) };
}, [])

  // set currentUser into local storage when currentUser is updated
  useEffect(() => {
    if (Object.keys(currentUser).length) { localStorage.setItem("currentUser", JSON.stringify(currentUser)); 
    console.log('Updated currentUser :>> ', currentUser) };
  }, [currentUser])

  const value = { users, setUsers, currentUser, setCurrentUser };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};
