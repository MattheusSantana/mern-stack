import mongoose from 'mongoose';


const connectMongoDB = () => {
    console.log("wait connecting database");
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB atlas connected"))
    .catch((error) => console.log(error));

}

export default connectMongoDB;