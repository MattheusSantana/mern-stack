const express = require("express");
const app = express();
const userRoute = require("./src/routes/user.route");
const connectMongoDB = require('./src/mongo/connect');


app.use(express.json());
app.use('/user', userRoute);

connectMongoDB();



app.listen(3000);
