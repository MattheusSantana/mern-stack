import mongoose from 'mongoose';

const connectMongoDB = () => {
    console.log("wait connecting database");

    mongoose.connect("mongodb+srv://root:root@cluster0.ywak5gt.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB atlas connected"))
    .catch((error) => console.log(error));

}

export default connectMongoDB;