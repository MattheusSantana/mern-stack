import movieService from '../services/movie.service.js';

const create = async (req, res) => {
    try{
        const {title, id, overview, poster_path, imdb_id } = req.body;
        console.log(title, id, overview, poster_path, imdb_id );

          const movie = await movieService.create(req.body);
      
          if (!movie) {
            res.status(400).json({ message: "Error creating user." });
          }
      
          res.status(201).json({
            message: "User created successfully",
            movie
          });


    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

export default { create }; 