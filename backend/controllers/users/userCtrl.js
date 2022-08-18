const User = require("../../model/user/User");



const userRegister = async (req, res) => {

    console.log(req.body)

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

const loginUser = async (req, res) => {

    try {
        const user = await User.findOne({email: req?.body?.email});
        if (!user ) {
            throw new Error("Login failed");
        }

        res.json(user);
    }
    catch(error){
        res.json(error.message);

    }

    

}

module.exports = {userRegister, loginUser}