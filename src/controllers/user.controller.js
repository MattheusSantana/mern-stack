const userService = require('../services/user.service');

const create = async (req, res) => {
    const {name, username, email, password} = req.body;

    if(!name || !username || !email || !password){
        res.status(400).json({message: "Please submit all fields"})
    }

    const user = await userService.create(req.body);

    if(!user){
        res.status(400).json({message: "Error creating user."});
    }

    res.status(201).json({
        message: "User created successfully",
        user: {
            name,
            email,
            password,
            id: user._id
        }
    });
}

module.exports = { create };