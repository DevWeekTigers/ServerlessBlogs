const expressAsyncHandler = require("express-async-handler");

const jwt = require('jsonwebtoken');
const User = require('../../model/user/User');

const authMiddleware = expressAsyncHandler(
    async (req, res, next) => {
        let token;
        if (req?.headers?.authorization?.startsWith('Bearer ')) {
            try {
                token = req.headers.authorization.split(' ')[1];
                //console.log(token);
                if (token) {
                    // verify token
                    const decoded = jwt.verify(token, process.env.JWT_KEY);  
                    console.log(decoded);

                    // find user by ID
                    const user = User.findById(decoded?.id).select("-password");
                    console.log(user);

                    // attach user to req.

                    req.user = user;

                    next();
                }
                else
                {
                    throw new Error('No token attached to header.');
                }
            } catch (error) {
                throw new Error('Not Authorized, token exprired.')
            }
        }
    }
);

module.exports = authMiddleware;