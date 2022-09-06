const jwt = require('jsonwebtoken');
const { SecretClient } = require('@azure/keyvault-secrets');
const { DefaultAzureCredential } = require('@azure/identity');
const { getKeyVaultCredentials , getKeyVaultSecret}  = require('./../keyvault/keyvaultconnect');
const config = require('./../../config');


const generateToken = async (id) => {

    
    const KEY_VAULT_URL = config.KEY_VAULT_URL;
    const SECRET_JWTKEY_NAME = config.SECRET_JWTKEY_NAME;
    console.log("KeyURL = " + SECRET_JWTKEY_NAME);
    let credentials = getKeyVaultCredentials();

    let token = await getKeyVaultSecret(KEY_VAULT_URL, credentials, SECRET_JWTKEY_NAME)
        .then(function (secret) {
            
            return jwt.sign({id}, secret.value , {expiresIn: '30d'});
            
        }).catch(function (err) {
          console.log(err);
        });

    return token; //
}


module.exports = generateToken;