import User from '../models/user.js';

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

export default {
  create,
  findAll,
  findById,
  update,
};
