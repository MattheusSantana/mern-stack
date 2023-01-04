import { ProductNotSupportedError } from "es7/lib/errors";
import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    value: {
        type: Number,
        required: true
    },
    
    image: {
        type: String,
        required: false
    },
    
    createdAt: {
        type: Date,
        default: Date.now()
    },

    rating: {
        type: Number,
        required: false
    },

    comments: {
        type: String,
        required: false

    },
    
});

const Product = mongoose.model("Product", productSchema);

export default Product;