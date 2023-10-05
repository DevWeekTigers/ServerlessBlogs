const express = require("express");
const {
  userRegister,
  loginUser,
  fetchUsers,
  deleteUser,

  fetchUser,
} = require("../../controllers/users/userCtrl");
const authMiddleware = require("../../middlewares/auth/authMiddleware");

const userRoutes = express.Router();

userRoutes.post("/api/users/register", userRegister);
userRoutes.post("/api/users/login", loginUser);

// use procted middleware to protect the route
userRoutes.use(authMiddleware);

userRoutes.get("/api/users", fetchUsers);
userRoutes.delete("api/users/:id", deleteUser);
userRoutes.get("/api/users/:id", fetchUser);

module.exports = userRoutes;
