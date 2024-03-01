const mongoose = require('mongoose');
const {Schema} = mongoose;
const UserSchema = new Schema({
   name: String,
   price: Int32Array,
   start_date: Date,
   end_date: Date,
   miles_from_campus: Decimal128,
   time: Date,
   address: String,
   university: String,
   rating: Decimal128,
   description: String,
   num_rooms: Decimal128,
   num_baths: Decimal128,
   total_rooms: Int32Array,
   total_baths: Int32Array,
   amenities: Array,
   roommate_group: Array
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;