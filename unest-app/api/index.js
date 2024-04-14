const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('./models/User.js');
const Listing = require('./models/Listing.js');
const Message = require('./models/Message.js');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs');
const { json } = require('react-router-dom');

require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(8);
const jwtSecret = 'flase53q73bafvwpuesud';

app.use(express.json())
app.use(cookieParser())
app.use('/uploads', express.static(__dirname+'/uploads'))

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}))

mongoose.connect(process.env.MONGO_URL);

app.get('/UNEST', (req,res) => {
    res.json('Api is Up');
});

app.post('/register', async (req,res) =>{
    const {first_name, last_name, birthday, username, email, password} = req.body
    const details = {year:"", major:"", minor:"", hobbies:"", interests:"", ideal_rent:""}
    const description = ""
    const personal_habits = {smoking:"", drinking:"", vegetarian:"", sleeping:"",}
    const roommate_preferences= {gender:"", smoking:"", drinking:"", vegetarian:"", sleeping:"",}
    const basic_info = {age:"", gender:"", pronouns:"", university:""}


    try{
        const userDoc = await User.create({
            first_name,
            last_name,
            birthday,
            username,
            email,
            description,
            basic_info,
            details,
            personal_habits,
            roommate_preferences,
            password:bcrypt.hashSync(password, bcryptSalt),
        });
        res.json(userDoc);
    } catch (e){
        res.status(422).json(e);
    }

});


app.post('/sendMessage', async(req, res) => {
    const {text, time, senderfn, senderln, senderUsername, receiverfn, receiverln, receiverUsername} = req.body;

    try{
        const messageDoc = await Message.create({
            text,
            time,
            senderfn,
            senderln,
            senderUsername, 
            receiverfn,
            receiverln, 
            receiverUsername,
        });
        res.json(messageDoc);
    } catch (e){
        res.status(422).json(e);
    }
})

app.get('/messages/:senderUsername/:receiverUsername', async (req, res) => {
    try {
        const {senderUsername, receiverUsername} = req.params;
        const messages = await Message.find({senderUsername: senderUsername, receiverUsername: receiverUsername}).sort({time: -1});
        if (messages.length === 0) {
            return res.status(404).json({message: 'Msg not found'});
        }
        const recMsg = messages[0]._id;
        res.json({recMsg});
    } catch (error) {
        console.error('Cannot get msg between sender and receiver', error);
        res.status(500).json({message: 'Server Error'});
    }
})

app.delete('/deleteMessage/:messageId', async (req, res) => {
    const {messageId} = req.params;
    try {
        const del = await Message.findByIdAndDelete(messageId);
        if (!del) {
            return res.status(404).json({message: "Message not found"});
        }
        res.json({message: "Message deleted successfully"});
    } catch (error) {
        res.status(500).json(error);
    }
})

app.put('/profile', async (req,res) =>{
    mongoose.connect(process.env.MONGO_URL);
    const { id, basic_info, details, description } = req.body;
    console.log("basic_info in app.put(): ");
    console.log("details in app.put(): ");
    
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            basic_info: { ...basic_info },
            details: { ...details },
            description: description
        }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

app.get('/api/users', async(req, res) => {
    try {
        const users = await User.find(); // Fetch all listings from the database
        res.json(users); // Send the listings as JSON response
      } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Server Error' });
      }
})

app.get('/excludeuser/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const users = await User.find({_id: {$ne: id}});
        res.json(users);
    }
    catch (error) {
        console.error("Failure of excluding user", error);
        res.status(500).json({message: 'Server Error'});
    }
})

app.get('/api/users/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id) // Fetch all listings from the database
        res.json(user); // Send the listings as JSON response
      } catch (error) {
        console.error('Error fetching specific user:', error);
        res.status(500).json({ message: 'Server Error' });
      }
})

app.get('/api/property/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const property = await Listing.findById(id);
        res.json(property);
    }
    catch (error) {
        console.error('Error fetching specific listing', error);
        res.status(500).json({message: 'Server Error'});
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
    const userDoc = await User.findOne({email})
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
        jwt.verify(token, jwtSecret, {}, async (err, userData)=>{
            if(err) throw err;
            const userDoc = await User.findById(userData.id);
            res.json(userDoc);
        });
    } else {
        res.json(null);
    }
    //res.json({token});
});


app.get('/api/listings', async(req, res) => {
    try {
        //console.log("executed listings get method")
        const listings = await Listing.find(); // Fetch all listings from the database
        res.json(listings); // Send the listings as JSON response
        //console.log("executed listings get method")
      } catch (error) {
        console.error('Error fetching listings:', error);
        res.status(500).json({ message: 'Server Error' });
      }
});

const photosMiddleware = multer({dest:'uploads/'});
app.post('/upload', photosMiddleware.array('photos', 100), (req,res)=>{
    const uploadedFiles = [];
    for(let i = 0; i < req.files.length; i++){
        const {path, originalname} = req.files[i];
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path + '.' + ext;
        fs.renameSync(path, newPath);
        uploadedFiles.push(newPath.replace('uploads/',''));
    }
    res.json(uploadedFiles);
});

app.post('/places', (req,res) => {
    const {token} = req.cookies;
    const {name, university, address, photos:addedPhotos, description,
    perks, start_date, end_date, price} = req.body;
    jwt.verify(token, jwtSecret, {}, async (err, userData)=>{
        if(err) throw err;
        const listingDoc = await Listing.create({
            owner:userData.id,
            name,university,address,addedPhotos,description,
            perks,start_date,end_date,price,
        })
        res.json(listingDoc);

    })
})

app.get('/places', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, jwtSecret, {}, async (err, userData)=>{
        const{id} = userData;
        res.json(await Listing.find({owner:id}));
    })
})


app.listen(4000);