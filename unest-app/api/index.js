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



    app.post('/api/upload-by-link', async (req,res) => {
        const {link} = req.body;
        const newName = 'photo' + Date.now() + '.jpg';
        await imageDownloader.image({
            url: link,
            dest: '/tmp/' +newName,
        });
        const url = await uploadToS3('/tmp/' +newName, newName, mime.lookup('/tmp/' +newName));
        res.json(url);
    });

    const photosMiddleware = multer({dest:'/tmp'});
    app.post('/api/upload', photosMiddleware.array('photos', 100), async (req,res) => {
        const uploadedFiles = [];
        for (let i = 0; i < req.files.length; i++) {
            const {path,originalname,mimetype} = req.files[i];
            const url = await uploadToS3(path, originalname, mimetype);
            uploadedFiles.push(url);
        }
        res.json(uploadedFiles);
    });

});


app.listen(4000);