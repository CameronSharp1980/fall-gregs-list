var mongoose = require('mongoose')

// WHAT IS AN ANIMAL
var schema = new mongoose.Schema({
    title: { type: String, required: true },
    species: { type: String },
    breed: { type: String },
    sex: { type: String },
    age: { type: Number, $gt: -1 },
    color: { type: String },
    price: { type: Number, required: true },
    ailments: { type: String, enum: ['Healthy', 'Ill'], default: 'Healthy' },
    description: { type: String },
    location: { type: String },
    contact: { type: String, required: true },
    img: { type: String, default: '//placehold.it/200x200' }
});

module.exports = mongoose.model('Animal', schema);