const User = require('../models/user');

const create = (body) => User.create(body);

module.exports  = { create };
