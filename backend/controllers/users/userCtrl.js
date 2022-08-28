const User = require("../../model/user/User");
const expressAsyncHandler = require("express-async-handler");


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
            res.json(userFound);
        }
        else
        {
            res.status(401);
            throw new Error('Invalid Login');
        }
    
        
    
    }
);

module.exports = {userRegister, loginUser}