const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const signupRoute = require('./routes/signups');

app.use('', signupRoute);




app.listen(PORT, () => {
    console.log('app is running');
})

const dbConnect = require('./config/database');
dbConnect();

app.get('/', (req, res) => {
    res.send('<h1>In the homepage</h1>');
})