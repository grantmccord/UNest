const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const User = require('./models/User.js');
const Listing = require('./models/Listing.js');
require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(8);

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}))

mongoose.connect(process.env.MONGO_URL);


app.get('/UNEST', (req,res) => {
    res.json('TESTING PLS WORK');
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