const express = require('express');
const { userRegister, loginUser, fetchUsers} =  require("../../controllers/users/userCtrl")

const userRoutes = express.Router();

userRoutes.post('/api/users/register', userRegister);

userRoutes.post('/api/users/login', loginUser);

userRoutes.get('/api/users', fetchUsers);

module.exports = userRoutes;