const mongoose = require('mongoose');

const theatreSchema = new mongoose.Schema({
        name:{
            type:String,
        },
        movieShowing:[{
            type:Number,
        }],
        movieTiming:[{
            type:Number,
        }],
        Audi:[{
            type:mongoose.Schema.Types.ObjectId, ref:'Audi'
        }],
})

const Theatre = mongoose.model('Theatre', theatreSchema);
module.exports = Theatre;