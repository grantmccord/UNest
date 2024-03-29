const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
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

const PlaceModel = mongoose.model('Place', placeSchema);

module.exports = PlaceModel;