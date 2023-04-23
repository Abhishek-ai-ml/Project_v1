const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
// const router = express.router();
require('express-router');

const cookieParser = require('cookie-parser');

const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
// app.use("/user", userRoute);

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

// app.use((req, res)=>{
//     res.status(400).send("eww")
// });


db_link = 'mongodb+srv://sushensinha8:owZCDr5zUt1C7tQr@cluster0.0gd6nyh.mongodb.net/test';

mongoose.connect(db_link)
.then(function(){
    console.log("DB Connected. ");
})
.catch(function(){
    console.log("ERROR !!!");
});

require('./User');

const user = mongoose.model("User")



app.route("/signup").post(async(req, res)=>{
    try{
        const u = await new user({
            username : req.body.username,
            email : req.body.email,
            phoneNo : req.body.phoneNo,
            password : req.body.password,
            confirmPassword : req.body.confirmPassword,
        });
        await u.save();
        console.log(u);
    }
    catch(err){
        res.send({status: "error"});
    }
});

app.route("/login").post(async(req, res)=>{
    console.log("in the server");
    try{
        console.log(req.body.email);
        const u = await user.find({email: req.body.email});
        console.log(u[0].password);
        if(u.length == 0){
            console.log("User Does not exist!");
        }
        else if(u[0].password == req.body.password){
            res.send({status: "Welcome"});
        }
        else{
            res.send({status: "Incorrect Password"});
        }
    }
    catch(err){
        res.send({status: "error"});
    }
});

// async function run(){
//     try{
//         const u = await user.create({
//             username: "Kyle",
//             email: "abcd@gmail.com",
//             phone: "8882935982",
//             password: "abcd**",
//             confirmpassword: "abcd**"
//         })
//         await u.save();
//         console.log(u);
//     }
//     catch(e){
//         console.log(e);
//     }
// }
// run();


app.listen(8000, ()=>{
    console.log("Running at 8000..");
});