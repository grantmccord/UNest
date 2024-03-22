const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const User = require('./models/User.js');
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
    res.json('API is Up');
});

app.post('/register', async (req,res) =>{
    const {firstname, lastname, birthday, username, email, password} = req.body

    try{
        const userDoc = await User.create({
            firstname,
            lastname,
            birthday,
            username,
            email,
            password:bcrypt.hashSync(password, bcryptSalt),
        });
        res.json(userDoc);
    } catch (e){
        res.status(422).json(e);
    }

});


app.listen(4000);