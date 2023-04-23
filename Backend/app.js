const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const userRoute = require('./Userdetails');

const cookieParser = require('cookie-parser');

const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors());
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



app.post("/signup", async(req, res)=>{
    const {username, email, phone, password, confirmpassword} = req.body;    
    try{
        const olduser = user.findOne({email});

        if(olduser){
            res.json({error: "User exists"});
        }
        await user.create({
            username, email, phone, password, confirmpassword
        });
        console.log(u);
        await u.save();
        res.send({status: "ok"});
    }
    catch(err){
        res.send({status: "error"});
    }
});


async function run(){
    try{
        const u = await user.create({
            username: "Kyle",
            email: "abcd@gmail.com",
            phone: "8882935982",
            password: "abcd**",
            confirmpassword: "abcd**"
        })
        await u.save();
        console.log(u);
    }
    catch(e){
        console.log(e);
    }
}
run();


app.listen(8000, ()=>{
    console.log("Running at 8000..");
});