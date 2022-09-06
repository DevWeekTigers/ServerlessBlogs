const expressAsyncHandler = require("express-async-handler");

const jwt = require('jsonwebtoken');
const User = require('../../model/user/User');
const { SecretClient } = require('@azure/keyvault-secrets');
const { DefaultAzureCredential } = require('@azure/identity');
const { getKeyVaultCredentials , getKeyVaultSecret}  = require('../../config/keyvault/keyvaultconnect');
const config = require('./../../config');


const authMiddleware = expressAsyncHandler(
    async (req, res, next) => {
        let token;
        if (req?.headers?.authorization?.startsWith('Bearer ')) {
            try {
                token = req.headers.authorization.split(' ')[1];
                //console.log(token);
                if (token) {

                    
                    const KEY_VAULT_URL = config.KEY_VAULT_URL;
                    const SECRET_JWTKEY_NAME = config.SECRET_JWTKEY_NAME;


                    const AZURE_TENANT_ID = config.AZURE_TENANT_ID;
                    const AZURE_CLIENT_ID = config.AZURE_CLIENT_ID;
                    const AZURE_CLIENT_SECRET = config.AZURE_CLIENT_SECRET;

                    let credentials = getKeyVaultCredentials();
                    let jwtkeyvalue = await getKeyVaultSecret(KEY_VAULT_URL, credentials, SECRET_JWTKEY_NAME)
                        .then(function (secret) {
                            return secret.value;

                        }).catch(function (err) {
                        console.log(err);
                        });

                    console.log(jwtkeyvalue);
                    // verify token
                    const decoded = jwt.verify(token, jwtkeyvalue);  
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