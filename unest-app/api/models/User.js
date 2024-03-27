const mongoose = require('mongoose');
const {Schema} = mongoose;
const UserSchema = new Schema({
   first_name: String,
   last_name: String,
   birthday: Date,
   username: {type:String, unique:true },
   email: {type:String, unique:true },
   password: String,
   details: {
      year: String,
      major: String,
      minors: String,
      hobbies: String,
      interest: String,
      ideal_rent: Number
   },
   description: String,
   personal_habits: {
      smoking: String,
      drinking: String,
      vegetarian: String,
      sleeping_type: String
   },
   roommate_preferences: {
      gender: String,
      smoking: String,
      drinking: String,
      vegetarian: String,
      sleeping: String
   },
   sign_up_date: Date,
   basic_info: {
      Age: String,
      Gender: String,
      Pronouns: String,
      University: String
   }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;