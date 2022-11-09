const route = require('express').Router();
const userController = require('../controllers/user.controller');
const {validId, validUser} = require('../middlewares/user.middleware');

route.post('/', userController.create);
route.get('/users', userController.findAll);
route.get('/:id', validId, validUser, userController.findById);
route.patch('/:id', validId, validUser, userController.update);

module.exports = route; 