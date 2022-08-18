const mongoose = require('mongoose');

const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL, {
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