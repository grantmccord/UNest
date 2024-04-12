const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    owner: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    title: String,
    address: String,
    campus: String,
    photos: [String],
    description: String,
    perks: [String],
    checkIn: String,
    checkOut: String,
    price: Number,

});

const ListingModel = mongoose.model('Listing', listingSchema);

module.exports = ListingModel;