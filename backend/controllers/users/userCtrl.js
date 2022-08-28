const User = require("../../model/user/User");
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../../config/token/generateToken");


const userRegister = expressAsyncHandler(
    async (req, res) => {

        // check if user is already registered
        const user = await User.findOne({email: req?.body?.email});
        
        if ( !user ) throw new Error("User already registered");
    
        try{
            const user = await User.create(
                {
                    firstName: req?.body?.firstName,
                    lastName: req?.body?.lastName,
                    email: req?.body?.email,
                    password: req?.body?.password,
                }
            );
    
            res.json(user);
        }
        catch(error){
            res.json(error.message);
        }
    }
);

const loginUser = expressAsyncHandler(
    async (req, res) => {

        const userFound = await User.findOne({email: req?.body?.email});

        const {email, password} = req.body;

        if ( userFound && (await userFound.isPasswordMatch(password)))
        {
            res.json({
                _id: userFound?._id,
                firstName: userFound?.firstName,
                lastName: userFound?.lastName,
                email: userFound?.email,
                profilePhoto: userFound?.profilePhoto,
                isAdmin: userFound?.isAdmin,
                token: generateToken(userFound?.id),
            });
        }
        else
        {
            res.status(401);
            throw new Error('Invalid Login');
        }
    
        
    
    }
);

//==============
// User
//==============

const fetchUsers = expressAsyncHandler(
    async (req, res) => {

        try {
            const users = await User.find({});
            res.json(users);
        }
        catch(error){
            res.json(error);
        }
    }
);

module.exports = {userRegister, loginUser, fetchUsers}