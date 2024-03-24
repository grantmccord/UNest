const mongoose = require('mongoose');
const {Schema} = mongoose;
const MessageSchema = new Schema({
   text: String, 
   time: Date, 
   sender: String,
   senderUsername: {type:String, unique:true },
   receiver: String,
   receiverUsername: {type:String, unique:true },
});

const MessageModel = mongoose.model('Message', MessageSchema);

module.exports = MessageModel;