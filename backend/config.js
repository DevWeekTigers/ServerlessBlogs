const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});


module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3000,
    JWT_KEY: process.env.JWT_KEY,
    MONGODB_URL: process.env.MONGODB_URL,
    KEY_VAULT_URL: process.env.KEY_VAULT_URL,
    SECRET_DB_NAME: process.env.SECRET_DB_NAME,
    SECRET_JWTKEY_NAME: process.env.SECRET_JWTKEY_NAME,

    SECRET_VERSION: process.env.SECRET_VERSION,
    AZURE_TENANT_ID: process.env.AZURE_TENANT_ID,
    AZURE_CLIENT_ID: process.env.AZURE_CLIENT_ID,
    AZURE_CLIENT_SECRET: process.env.AZURE_CLIENT_SECRET

}