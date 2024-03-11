const mongoose = require('mongoose');
const {Schema} = mongoose;
const ListingSchema = new Schema({
   name: String,
   price: Number,
   start_date: Date,
   end_date: Date,
   miles_from_campus: Number,
   time: Date,
   address: String,
   university: String,
   rating: Number,
   description: String,
   num_rooms: Number,
   num_baths: Number,
   total_rooms: Number,
   total_baths: Number,
   amenities: Array,
   roommate_group: Array
});

const ListingModel = mongoose.model('Listing', ListingSchema);

module.exports = ListingModel;