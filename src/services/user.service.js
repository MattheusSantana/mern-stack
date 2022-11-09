const User = require("../models/user");

const create = (body) => User.create(body);

const findAll = () => User.find();

const findById = (id) => User.findById(id);

module.exports = { 
    create, 
    findAll, 
    findById 
};
