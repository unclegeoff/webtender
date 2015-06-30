var mongoose = require('mongoose');

var Deal = new mongoose.Schema({
    bar: String,
    title: String,
    type: String, //legal values are daily, weekly, or single
    dotw: {type: String, default: null}, //only for deals of type 'weekly'
    date: {type: Date, default: null}, //only for deals of type 'single'
    details: String
});

module.exports = mongoose.model('Deal', Deal);
