const userService = require('../services/user.service');
const mongoose = require('mongoose');

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

const findAll = async (req, res) => {
    const users = await userService.findAll();
    if(users.length === 0){
        return res.status(400).send({message: "There are no registered users!"});
    }

    res.send(users);
}

const findById =  async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message: "Invalid Id!"});
    }

    const user = await userService.findById(id);

    if (!user) {
        return res.status(400).send({message: "User not found!"});
    }

    res.send(user);
}

const update = (req, res) => {
    const {name, username, email, password} = req.body;

    if(!name && !username && !email && !password){
        res.status(400).json({message: "Please submit  at least one field!"})
    }

    const userUpdated = userService.update(req.body);

    
    if(!userUpdated){
        res.status(400).json({message: "Error updating user."});
    }

    res.status(201).json({
        message: "User updated successfully",
        user: {
            name,
            email,
            password,
            id: user._id
        }
    });



    
}


module.exports = { 
    create, 
    findAll, 
    findById 
};