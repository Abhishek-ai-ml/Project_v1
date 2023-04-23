const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const User = require('./User');
const userRoute = require('./Userdetails');

const cookieParser = require('cookie-parser');

const app = express();
app.listen(8000, ()=>{
    console.log("Running at 8000..");
});

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/user", userRoute);

app.get("/", (req, res)=>{
    res.send("HELLO WORLD!")
});

// const http = require('http');

// const server = http.createServer((req, res)=>{
//     console.log("Request has been made");
//     res.setHeader('content-type', 'text/plain');
//     res.write("OK");
//     console.log("ok");
//     res.end();
// });

// server.listen(3000, 'localhost', ()=>{
//     console.log("Server is listening to port 3001");
// });

app.use((req, res)=>{
    res.status(400).send("eww")
});


db_link = 'mongodb+srv://sushensinha8:owZCDr5zUt1C7tQr@cluster0.0gd6nyh.mongodb.net/test';

mongoose.connect(db_link)
.then(function(){
    console.log("DB Connected. ");
})
.catch(function(){
    console.log("ERROR !!!");
});