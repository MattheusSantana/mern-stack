import express from 'express';
import userRoute from './src/routes/user.route.js';
import connectMongoDB from './src/mongo/connect.js';

const app = express();

app.use(express.json());
app.use('/user', userRoute);

connectMongoDB();



app.listen(3000);
