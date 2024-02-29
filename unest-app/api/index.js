const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.get('/test', (req,res) => {
    res.json('test ok');
});

app.post('/register',(req,res)=>{
    const {fName, lName} = req.body;
    res.json({fName, lName})
})

app.listen(4000);