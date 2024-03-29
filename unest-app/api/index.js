const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('./models/User.js');
const Listing = require('./models/Listing.js');
const Message = require('./models/Message.js');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(8);
const jwtSecret = 'flase53q73bafvwpuesud';

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}))

mongoose.connect(process.env.MONGO_URL);

app.get('/UNEST', (req,res) => {
    res.json('Api is Up');
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

/*
app.post('/sendMessage', async(req, res) => {
    const {text, time, senderfn, senderln, senderUsername, receiverfn, receiverln, receiverUsername} = req.body

    try{
        const userDoc = await Message.create({
            text,
            time,
            senderfn,
            senderln,
            senderUsername, 
            receiverfn,
            receiverln, 
            receiverUsername,
        });
        res.json(userDoc);
    } catch (e){
        res.status(422).json(e);
    }
})
*/

app.get('/api/users', async(req, res) => {
    try {
        const users = await User.find(); // Fetch all listings from the database
        res.json(users); // Send the listings as JSON response
      } catch (error) {
        console.error('Error fetching listings:', error);
        res.status(500).json({ message: 'Server Error' });
      }
})

app.post('/findUser', async(req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    const {user} = req.body;
    try {
        mongoose.connect(process.env.MONGO_URL);
        const {user} = req.body;
        const find = await User.findOne({user:user});
        res.json(find);
    } catch(error) {
        res.status(422).json('Could not fetch');
    }
})

app.post('/login', async(req,res) => {
    mongoose.connect(process.env.MONGO_URL);
    const {email, password} = req.body;
    const userDoc = await User.findOne({email:email})
    if(userDoc) {
        const checkPass = bcrypt.compareSync(password, userDoc.password);
        if(checkPass){
            jwt.sign({email:userDoc.email, id:userDoc._id}, jwtSecret, {}, (err, token)=>{
                if (err) throw err;
                res.cookie('token', token).json(userDoc);
            });
        } else {
            res.status(422).json("Wrong Password")
        }
    } else{
        res.json("Not Found")
    }
})

app.get('/profile',(req,res)=>{
    const {token} = req.cookies;
    if(token){
        jwt.verify(token, jwtSecret, {}, (err, user)=>{
            if(err) throw err;
            res.json(user);
        })
    }
    res.json({token});
})


app.get('/api/listings', async(req, res) => {
    try {
        console.log("executed listings get method")
        const listings = await Listing.find(); // Fetch all listings from the database
        res.json(listings); // Send the listings as JSON response
        console.log("executed listings get method")
      } catch (error) {
        console.error('Error fetching listings:', error);
        res.status(500).json({ message: 'Server Error' });
      }
})


app.listen(4000);