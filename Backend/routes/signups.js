const express = require('express');
const router = express.Router();


const {createSignUp} = require('../controller/createSignUp');

router.post('/signup', createSignUp);

module.exports = router;

