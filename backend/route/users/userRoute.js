const express = require('express');
const { userRegister, loginUser} =  require("../../controllers/users/userCtrl")

const userRoutes = express.Router();

userRoutes.post('/api/users/register', userRegister);

userRoutes.post('/api/users/login', loginUser);


module.exports = userRoutes;