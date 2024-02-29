const express = require('express');
const cors = require('cors')
const mongoose = require("mongoose");
require('dotenv').config()
const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req,res) => {
    res.json('test ok');
});

app.post('/register',(req,res)=>{
    const {firstname, lastname, username,  email, birthday, password} = req.body;
    res.json({firstname, lastname, username,  email, birthday, password})
})

app.listen(4000);