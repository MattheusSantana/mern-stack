import Product from "../models/product.js";

const create = (body) => Product.create(body);

export default {
  create,
};
