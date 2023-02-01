import express from 'express';
import {validId, validUser} from '../middlewares/user.middleware.js';
import userController from '../controllers/user.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const route = express.Router();

route.post('/', userController.create);
route.get('/users', authMiddleware,  userController.findAll);
route.get('/:id', validId, validUser, userController.findById);
route.patch('/:id', validId, validUser, userController.update);

export default route; 