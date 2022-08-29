const express = require('express');
const { userRegister, loginUser, fetchUsers, 
    deleteUser,

    fetchUser} =  require("../../controllers/users/userCtrl")
const authMiddleware = require("../../middlewares/auth/authMiddleware");

const userRoutes = express.Router();


userRoutes.post('/api/users/register', userRegister);

userRoutes.post('/api/users/login', loginUser);

userRoutes.get('/api/users', authMiddleware, fetchUsers);

userRoutes.delete('api/users/:id', authMiddleware,deleteUser);

userRoutes.get('/api/users/:id', authMiddleware,fetchUser);


module.exports = userRoutes;