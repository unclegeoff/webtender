var mongoose = require('mongoose');

var Deal = new mongoose.Schema({
    title: String,
    type: String,
    dotw: {type: String, default: null}, //only for deals of type 'weekly'
    details: String
});

module.exports = mongoose.model('Deal', Deal);