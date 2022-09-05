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
    setUsers(users);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const value = { users, setUsers, currentUser, setCurrentUser };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};
