const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    Title: {
        type:String
    },
    Genre: [{
        type:String,
    }],
    Languages: [{
        type:String,
    }],
    Dimension: [{
        type:String,
    }],
    RunTime: {
        type:Number,
    },
    About: {
        type:String,
    },
    Casts: [{
        type:mongoose.Schema.Types.ObjectId, ref:'Cast'
    }],
    Poster: {
        type:String,
    }

})

const Movie = mongoose.model('Movie', theatreSchema);
module.exports = Movie;