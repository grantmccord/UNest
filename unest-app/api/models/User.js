const mongoose = require('mongoose');
const {Schema} = mongoose;
const UserSchema = new Schema({
   firstname: String,
   lastname: String,
   birthday: Date,
   username: {type:String, unique:true },
   email: {type:String, unique:true },
   password: String,
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;