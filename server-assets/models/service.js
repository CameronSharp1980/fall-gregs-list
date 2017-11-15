var mongoose = require('mongoose')

// WHAT IS A SERVICE
var schema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    location: { type: String },
    contact: { type: String, required: true }
});

module.exports = mongoose.model('Service', schema);