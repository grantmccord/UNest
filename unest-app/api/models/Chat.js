const mongoose = require('mongoose');
const {Schema} = mongoose;
const ChatSchema = new Schema({
   subletter_id: Number
});

const ChatModel = mongoose.model('Chat', ChatSchema);

module.exports = ChatModel;