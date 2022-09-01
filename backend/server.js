const express = require("express")
//const dotenv = require("dotenv")
const dbConnect = require("./config/database/dbConnect");
const {userRegister} = require("./controllers/users/userCtrl");
const userRoutes = require("./route/users/userRoute");
const postRoute = require("./route/posts/postRoute");
const { errorHandler, notFound } = require("./middlewares/error/errorHandler");
const cors = require('cors');
const config = require('./config');



const app = express();
//dotenv.config();

dbConnect();
console.log(process.env)

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

//const PORT = process.env.PORT || 5000

//app.listen(PORT, console.log(`Server listening on ${PORT}`));
app.listen(config.PORT, config.HOST, () => {
    console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
})