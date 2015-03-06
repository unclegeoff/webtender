var mongoose = require('mongoose');

var User = new mongoose.Schema({
    first_name : String,
    last_name : String,
    current_bar : String,
    friends : [String]
});

module.exports = mongoose.model('User', User);