const User = require("../../model/user/User");
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../../config/token/generateToken");
const validateMongoDbId = require("../utils/validateMongoDbId");

//==============
// Register User
//==============
const userRegister = expressAsyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req?.body;
  // check if user is already registered
  const user = await User.findOne({ email });
  console.log("found user: ", user);

  if (user) throw new Error("User already registered");

  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });
    console.log("created user: ", res.json(user));
    res.json(user);
  } catch (error) {
    res.json("error registering user: ", error.message);
  }
});

//==============
// Login  User
//==============

const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const userFound = await User.findOne({ email });

  if (userFound && (await userFound.isPasswordMatch(password))) {
    let token = await generateToken(userFound?.id);
    res.json({
      _id: userFound?._id,
      firstName: userFound?.firstName,
      lastName: userFound?.lastName,
      email: userFound?.email,
      profilePhoto: userFound?.profilePhoto,
      isAdmin: userFound?.isAdmin,
      token: token,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Login");
  }
});

//==============
// fetch User
//==============

const fetchUsers = expressAsyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

//==============
// Delete User
//==============

const deleteUser = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    validateMongoDbId(id);

    const deleteUser = await User.findByIdAndDelete(id);

    res.json("deleteUser");
  } catch (error) {
    res.json(error);
  }
});

// user details

const fetchUser = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    validateMongoDbId(id);

    const user = await User.findById(id);

    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

//==========================================================
module.exports = {
  userRegister,
  loginUser,
  fetchUsers,
  deleteUser,
  fetchUser,
};
