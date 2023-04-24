const mongoose = require('mongoose');

const castSchema = mongoose.Schema({
    name:{
        type:String,
    },
    image:{
        type:String,
    }
})

const Cast = mongoose.model('Cast', theatreSchema);
module.exports = Cast;