import mongoose from 'mongoose';


const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    poster_path: {
        type: String,
        required: true,
        select: false
    },
    release_date: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    imdb_id: {
        type: String,
        required: true
    }
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
