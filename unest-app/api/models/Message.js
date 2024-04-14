const mongoose = require('mongoose');
const {Schema} = mongoose;
const MessageSchema = new Schema({
   text: String, 
   time: {type: Date, default: Date.now}, 
   senderfn: String,
   senderln: String,
   senderUsername: String,
   receiverfn: String,
   receiverln: String,
   receiverUsername: String,
});

const MessageModel = mongoose.model('Message', MessageSchema);

module.exports = MessageModel;

