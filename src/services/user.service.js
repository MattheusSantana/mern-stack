const User = require("../models/user");

const create = (body) => User.create(body);

const findAll = () => User.find();

const findById = (id) => User.findById(id);

const update = (id, name, username, email, password) => {
  return User.findOneAndUpdate(
    { _id: id },
    {
      name,
      username,
      email,
      password,
    }
  );
};

module.exports = {
  create,
  findAll,
  findById,
  update,
};
