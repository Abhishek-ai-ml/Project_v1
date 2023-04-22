const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    pass:  {
        type: String,
        required: true,
    }
}).set('timestamps', true);

module.exports = mongoose.model("User", userSchema);