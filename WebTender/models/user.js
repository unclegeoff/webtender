var mongoose = require('mongoose');

var User = new mongoose.Schema({
    first_name : String,
    last_name : String,
    current_bar : {type: String, default: null},

    friends : []
});

module.exports = mongoose.model('User', User);
