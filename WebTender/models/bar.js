var mongoose = require('mongoose');
var Deal = require('./deal.js');
var User = require('./user.js');

var Bar = new mongoose.Schema({
    name_city_st: String,
    display_name: String,
    address: String,
    capacity: Number
});

Bar.virtual('', function(){

});

Bar.virtual('current_patrons', function(){
    User.find({current_bar: Bar.name_city_st}, function(err, results){
        if(err || !results || !results.length){
            return null;
        } else {
            return results.length;
        }
    });
});

module.exports = mongoose.model('Bar', Bar);
