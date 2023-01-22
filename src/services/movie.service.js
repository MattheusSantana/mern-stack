import Movie from '../models/movie.model.js';
const create = (body) => Movie.create(body);

export default { create };