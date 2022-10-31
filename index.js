const express = require("express");
const app = express();
const userRoute = require("./src/routes/user.route");

app.use('/user', userRoute);

app.listen(3000);