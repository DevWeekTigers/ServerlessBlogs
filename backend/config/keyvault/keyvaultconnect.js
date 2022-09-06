const { SecretClient } = require('@azure/keyvault-secrets');
const { DefaultAzureCredential } = require('@azure/identity');

const  getKeyVaultCredentials = () => {
    return new DefaultAzureCredential();
}
const getKeyVaultSecret =  (keyVaultURL, credentials, secretName) => {
    console.log("Scret = " + secretName);
    let keyVaultClient = new SecretClient(keyVaultURL, credentials);
    return  keyVaultClient.getSecret(secretName);
}

module.exports = {getKeyVaultCredentials, getKeyVaultSecret};