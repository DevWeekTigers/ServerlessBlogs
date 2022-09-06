const mongoose = require('mongoose');
const config = require('../../config');


const dbConnect = async (connectionName) => {
    try{
        await mongoose.connect(connectionName, {
            //useCreateIndex: true,
            //useFindAndModify: true,
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("DB is connected");
    }
    catch(err){
        console.log(`Error ${err.message}`);

    }
};

module.exports = dbConnect;