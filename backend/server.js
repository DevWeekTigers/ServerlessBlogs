const express = require("express")
const dotenv = require("dotenv")
const dbConnect = require("./config/database/dbConnect");
const {userRegister} = require("./controllers/users/userCtrl");
const userRoutes = require("./route/users/userRoute");
const postRoute = require("./route/posts/postRoute");
const { errorHandler, notFound } = require("./middlewares/error/errorHandler");



const app = express();
dotenv.config();

dbConnect();
console.log(process.env)

app.use(express.json())

app.use("/", userRoutes);

app.post("/api/users/login", (req, res) => {
    res.json({user: 'User login'});
})


app.get("/api/users", (req, res) => {
    res.json({user: 'fetch User'});
})


// post routes
app.use('/api/posts', postRoute)

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 6000

app.listen(PORT, console.log(`Server listening on ${PORT}`));
