const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const User = require('./models/User.js');
const {mongo} = require("mongoose");
require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(8);

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}))

mongoose.connect(process.env.MONGO_URL);


app.get('/test', (req,res) => {
    res.json('TESTING PLS WORK');
});

app.post('/register', async (req,res) =>{
    const {username, email, password} = req.body
    const userDoc = await User.create({
        username,
        email,
        password:bcrypt.hashSync(password, bcryptSalt),
    });


    res.json(userDoc);
});


app.listen(4000);