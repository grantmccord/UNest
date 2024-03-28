const mongoose = require('mongoose');
const {Schema} = mongoose;
const MessageSchema = new Schema({
   text: String, 
   time: Date, 
   senderfn: String,
   senderln: String,
   senderUsername: {type:String, unique:true },
   receiverfn: String,
   receiverln: String,
   receiverUsername: {type:String, unique:true },
});

const MessageModel = mongoose.model('Message', MessageSchema);

module.exports = MessageModel;
