import productService from "../services/product.service.js";
const create = async (req, res) => {
    try {
        const {name, value} = req.body;
        
        if (!name || !value){
            res.status(400).send({message: "Please submit at least name and value for product"});
        }

        const product = await productService.create(req.body);

        res.status(201).send({
            message: "Product created succesfully",
            product
        });
    } catch (error){
        res.status(500).send({message: error.message});
    }

};

export default { create };