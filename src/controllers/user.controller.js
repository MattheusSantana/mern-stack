import userService from '../services/user.service.js';

const create = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
      res.status(400).json({ message: "Please submit all fields" });
    }

    const user = await userService.create(req.body);

    if (!user) {
      res.status(400).json({ message: "Error creating user." });
    }

    res.status(201).json({
      message: "User created successfully",
      user: {
        name,
        email,
        password,
        id: user._id,
      },
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const users = await userService.findAll();
    if (users.length === 0) {
      return res
        .status(400)
        .send({ message: "There are no registered users!" });
    }

    res.send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const findById = async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    if (!name && !username && !email && !password) {
      res
        .status(400)
        .json({ message: "Please submit  at least one field for update!" });
    }

    const id = req.id;

    const userUpdated = await userService.update(
      id,
      name,
      username,
      email,
      password
    );

    res.status(201).json({
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default {
  create,
  findAll,
  findById,
  update,
};
