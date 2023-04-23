const express = require('express');
const mongoose = require('mongoose');
const User = require('./User');
const cookieParser = require('cookie-parser');

const userRouter = express.Router();

userRouter.route('/signup').post(postSignUp);

userRouter.route('/login').post(postLogIn);

async function postSignUp(req, res){
    try{
        const newUser = req.body;
        let data = await User.create(newUser);
        res.cookie('userID', data._id, {maxAge: 1000*60*60*24 ,httpOnly: true});
        res.sendFile(__dirname+'Login.js');
    }
    catch(e){
        console.log(e.message);
    }
}

async function postLogIn(req, res){
    const data = req.body;
    try{
        const user = await User.findOne({ email: data.email, password: data.password });
        if (!user) {
            console.log('User not found');
            res.send("Invalid Credentials");
            return;
        }
        res.cookie('userID', user._id, {maxAge: 1000*60*60*24 ,httpOnly: true});
        res.send(user);
        console.log(user);
    } catch(err){
        console.log(err);
        return;
    }
}