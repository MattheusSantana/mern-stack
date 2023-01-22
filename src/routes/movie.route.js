import express from 'express';
import movieController from '../controllers/movie.controller.js';


const movieRouter = express.Router();

movieRouter.post('/', movieController.create);

export default movieRouter;