var mongoose = require('mongoose')

// WHAT IS A PROPERTY
var schema = new mongoose.Schema({
    title: { type: String, required: true },
    zoning: { type: String },
    squareFeet: { type: Number, $gt: -1 },
    constructionDate: { type: Number },
    color: { type: String },
    price: { type: Number, required: true },
    condition: { type: String },
    description: { type: String },
    location: { type: String },
    contact: { type: String, required: true },
    img: { type: String, default: '//placehold.it/200x200' }
})

module.exports = mongoose.model('Property', schema);