const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sushensinha8:owZCDr5zUt1C7tQr@cluster0.0gd6nyh.mongodb.net/test');

const User = require('./Models/User')

app.get('/', (req, res)=>{
    res.send("HELLO WORLD!");
});

app.listen('3000', ()=>{
    console.log('server is running at port 3000');
});

newUser();
async function newUser(){
    try{
        const user = await User.create({name: "Kylei", email:"abcd1273@gmail.com", phone:"9818723249", pass:"12345608"})
        await user.save();
        console.log(user);
    }
    catch (e){
        console.log(e.message);
    }
}