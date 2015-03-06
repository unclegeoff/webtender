var mongoose = require('mongoose');
var Deal = require('./deal.js');
var User = require('./user.js');

var Bar = new mongoose.Schema({
    name_city_st: String,
    display_name: String,
    address: String,

    deals: [{Object: Deal}]
});

Bar.virtual(' ', function(){

});

Bar.virtual('patrons', function(){

});

module.exports = mongoose.model('Bar', Bar);