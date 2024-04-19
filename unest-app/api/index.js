const express = require('express');
const axios = require('axios');
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

app.get('/geocode/:address', async (req, res) => {
    try {
        const {address} = req.params;
        const response = await axios.get(`https://geocoding-service.com/geocode?address=${encodeURIComponent(address)}`);
        res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/register', async (req,res) =>{
    const {first_name, last_name, birthday, username, email, password, secretWord} = req.body
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
            secretWord,
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

app.get('/lastmsg/:senderUsername/:receiverUsername', async (req, res) => {
    try {
        const {senderUsername, receiverUsername} = req.params;
        const messages = await Message.find({$or: [
            { senderUsername: senderUsername, receiverUsername: receiverUsername },
            { senderUsername: receiverUsername, receiverUsername: senderUsername }
          ]
        }).sort({time: -1});        
        const recMsg = messages[0];
        res.json(recMsg);
    } catch (error) {
        console.error('Cannot get msg between sender and receiver', error);
        res.status(500).json({message: 'Server Error'});
    }
})

app.get('/msg/:senderUsername/:receiverUsername', async (req, res) => {
    try {
        const {senderUsername, receiverUsername} = req.params;
        const messages = await Message.find({$or: [
            { senderUsername: senderUsername, receiverUsername: receiverUsername },
            { senderUsername: receiverUsername, receiverUsername: senderUsername }
          ]
        }

          
        /*{ $or: [
            { senderUsername: senderUsername },
            { receiverUsername: senderUsername }
          ],
          $or: [
            { senderUsername: receiverUsername },
            { receiverUsername: receiverUsername }
          ]}*/).sort({time: 1});

        res.json(messages);
    }   
    catch (error) {
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

app.put('/api/users/upload-profile-pic', upload.single('avatar'), async (req, res) => {
    console.log("uploading image to uploads folder")
  });

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

// app.put('/api/users/:id/profile-pic', upload.single('avatar'), async (req, res) => {
//     console.log("inside app.put")
//     const { filename } = req.file;
//     console.log("filename in app.put: ", filename)
//     const id = req.params.id; // Get the user ID from URL params

//     try {
//         const updatedUser = await User.findByIdAndUpdate(id, {
//             profile_pic: `/uploads/${filename}`,
//         }, { new: true });

//         if (!updatedUser) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         console.log("updatedUser: ", updatedUser)
//         res.json(updatedUser);
//     } catch (error) {
//         console.error('Error updating user profile:', error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });


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

// app.get('/api/users/:id', async(req, res) => {
//     try {
//         const {id} = req.params;
//         const user = await User.findById(id) // Fetch all listings from the database
//         res.json(user); // Send the listings as JSON response
//       } catch (error) {
//         console.error('Error fetching specific user:', error);
//         res.status(500).json({ message: 'Server Error' });
//       }
// })




// app.get('/api/users/:id', async(req, res) => {
//     try {
//         const {id} = req.params;
//         const user = await User.findById(id) // Fetch all listings from the database
//         res.json(user); // Send the listings as JSON response
//       } catch (error) {
//         console.error('Error fetching specific user:', error);
//         res.status(500).json({ message: 'Server Error' });
//       }
// })






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

app.post('/validate', async(req,res) => {
    mongoose.connect(process.env.MONGO_URL);
    const {username, email} = req.body;
    const userDoc = await User.findOne({email})
    if(userDoc) {
        if(username === userDoc.username){
            res.json({status:"FOUND" , pass: bcrypt.hashSync(userDoc.password, 8)})
        } else {
            res.status(422).json("No Such User")
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
    perks, start_date, end_date, price, miles_from_campus, num_rooms, num_baths} = req.body;
    jwt.verify(token, jwtSecret, {}, async (err, userData)=>{
        if(err) throw err;
        const listingDoc = await Listing.create({
            owner:userData.id,
            name,university,address, photos:addedPhotos,description,
            perks,start_date,end_date,price, miles_from_campus, num_rooms, num_baths
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

app.get('/places/:id', async (req,res) => {
    const {id} = req.params;
    res.json(await Listing.findById(id));
} )

app.put('/places', async (req,res) => {
    const {token} = req.cookies;
    const {id, name, university, address, photos:addedPhotos, description,
        perks, start_date, end_date, price, miles_from_campus, num_rooms, num_baths} = req.body;

    jwt.verify(token, jwtSecret, {}, async (err, userData)=>{
        const placeDoc = await Listing.findById(id);
        if(userData.id === placeDoc.owner.toString()){
            placeDoc.set({
                name,university,address, photos:addedPhotos,description,
                perks,start_date,end_date,price, miles_from_campus, num_rooms, num_baths
            })
            await placeDoc.save();
            res.json('ok');
        }
    });
})

app.delete('/places/:id', async (req, res) => {
    const {id} = req.params;
    try{
        const del = await Listing.findByIdAndDelete(id);
        if(!del){
            return res.status(404).json("Error Deleting Post");
        }
    } catch (e){
        res.status(500).json(e);
    }
});
app.get('/logout', (req, res) => {
    if (req.cookies) {
        res.clearCookie('token');
        res.send('Logout successful');
    }
  });


app.listen(4000);