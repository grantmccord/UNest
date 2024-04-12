const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('./models/User.js');
const Place = require('./models/Place.js')
const Listing = require('./models/Listing.js');
const Message = require('./models/Message.js');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs');

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

    try{
        const userDoc = await User.create({
            first_name,
            last_name,
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

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  

const upload = multer({ storage: storage });
app.put('/api/users/:id/profile-pic', upload.single('avatar'), async (req, res) => {
    console.log("inside app.put")
    const { filename } = req.file;
    console.log("filename in app.put: ", filename)
    const id = req.params.id; // Get the user ID from URL params

    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            profile_pic: `/uploads/${filename}`,
        }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        console.log("updatedUser: ", updatedUser)
        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ message: 'Server Error' });
    }
  });



app.put('/profile', async (req,res) =>{
    mongoose.connect(process.env.MONGO_URL);
    const { id, basic_info, details, personal_habits, roommate_preferences, description } = req.body;
    console.log("basic_info in app.put(): ");
    console.log("details in app.put(): ");
    console.log("personal_habits in app.put(): ");
    console.log("roommate_preferences in app.put(): ");
    
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            basic_info: { ...basic_info },
            details: { ...details },
            personal_habits: { ...personal_habits },
            roommate_preferences: { ...roommate_preferences },
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



// app.get('/api/users', async(req, res) => {
//     try {
//         const {id} = req.params;
//         const user = await User.findById(id) // Fetch all listings from the database
//         res.json(user); // Send the listings as JSON response
//       } catch (error) {
//         console.error('Error fetching specific user:', error);
//         res.status(500).json({ message: 'Server Error' });
//       }
//     const {token} = req.cookies;
//     if(token){
//         jwt.verify(token, jwtSecret, {}, async (err, userData)=>{
//             if(err) throw err;
//             const userDoc = await User.findById(userData.id);
//             res.json(userDoc);
//         });
//     } else {
//         res.json(null);
//     }
// })

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
        console.log("executed listings get method")
        const listings = await Listing.find(); // Fetch all listings from the database
        res.json(listings); // Send the listings as JSON response
        console.log("executed listings get method")
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
    const {title, university, address, photos:addedPhotos, description,
    perks, checkIn, checkOut, price} = req.body;
    jwt.verify(token, jwtSecret, {}, async (err, userData)=>{
        if(err) throw err;
        const placeDoc = await Place.create({
            owner:userData.id,
            title,university,address,addedPhotos,description,
            perks,checkIn,checkOut,price,
        })
        res.json(placeDoc);

    })
})

app.get('/places', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, jwtSecret, {}, async (err, userData)=>{
        const{id} = userData;
        res.json(await Place.find({owner:id}));

    })
})


app.listen(4000);