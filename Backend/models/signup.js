const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            maxLength:20,
            minLength:8,
        },

        email: {
            type:String,
            required:true,
            unique:true,
            maxLength:15,
        },

        phoneNumber: {
            type:String,
            required:true,
            minLength:10,
            maxLength:10,
        },

        password: {
            type:String,
            required:true,
            minLength:8,
        }
    }
);


module.exports = mongoose.model('SignUp', signupSchema);