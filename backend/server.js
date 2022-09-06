const express = require("express")
//const dotenv = require("dotenv")
const dbConnect = require("./config/database/dbConnect");
const {userRegister} = require("./controllers/users/userCtrl");
const userRoutes = require("./route/users/userRoute");
const postRoute = require("./route/posts/postRoute");
const { errorHandler, notFound } = require("./middlewares/error/errorHandler");
const cors = require('cors');
const config = require('./config');
const { SecretClient } = require('@azure/keyvault-secrets');
const { DefaultAzureCredential } = require('@azure/identity');
const { getKeyVaultCredentials , getKeyVaultSecret}  = require('./config/keyvault/keyvaultconnect');


const app = express();
///////////////////////////////////


const KEY_VAULT_URL = config.KEY_VAULT_URL;
const SECRET_DB_NAME = config.SECRET_DB_NAME;

const AZURE_TENANT_ID = config.AZURE_TENANT_ID;
const AZURE_CLIENT_ID = config.AZURE_CLIENT_ID;
const AZURE_CLIENT_SECRET = config.AZURE_CLIENT_SECRET;

console.log(KEY_VAULT_URL);
console.log(SECRET_DB_NAME);


let credentials = getKeyVaultCredentials();
getKeyVaultSecret(KEY_VAULT_URL, credentials, SECRET_DB_NAME)
    .then(function (secret) {
      dbConnect(secret.value);

    }).catch(function (err) {
      console.log(err);
    });

//////////////////////////////////


app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']

}));

app.use("/", userRoutes);

// post routes
app.use('/api/posts', postRoute)

app.use(notFound);
app.use(errorHandler);

app.listen(config.PORT, config.HOST, () => {
    console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
})