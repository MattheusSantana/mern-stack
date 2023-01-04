import express from "express";
import productController from "../controllers/product.controller.js";
const productRoute = express.Router();

productRoute.post('/', productController.create);

export default productRoute;