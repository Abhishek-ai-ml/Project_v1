const mongoose = require('mongoose');
 
const audiSchema = new mongoose.Schema({
    seats:{
        type:Number,
    },
    seatInfo:{
        type:[{
            type:Boolean,
        }]
    }
})

const Audi = mongoose.model('Audi', theatreSchema);
module.exports = Audi;