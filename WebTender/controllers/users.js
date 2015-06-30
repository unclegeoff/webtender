var async = require('async');
var User = require('../models/user.js');
var mongoose = require('mongoose');

var userCtrl = {
    add: function(params, callback){
        var newUser = new User(params);
        newUser.save(function(err, _user){
            if(err){
                return callback(err);
            }
            return callback(null, _user);
        })
    },

    findUser: function(params, callback){
        //TODO: check to make sure user can do this
        User.findById(params.id, function(err, _user){
            if(err){
                return callback(err);
            }
            return callback(null, _user);
        });
    },

    addFriend: function(params, callback){
        var res_obj = [];
        async.series(
            [
                function(series_cb){
                    User.findById(params.user_id, function(err, _user){
                        if(err){
                            return callback(err);
                        }
                        if(_user){
                            var friends_arr = _user.friends;
                            friends_arr.push(params.friend_id);
                            _user.update({friends: friends_arr}, function(err, _updated_doc){
                                res_obj.push(_updated_doc);
                                return series_cb();
                            });
                        } else {
                            return callback(new Error('Error making friends'));
                        }
                    });
                },
                function(series_cb){
                    User.findById(params.friend_id, function(err, _user){
                        if(err){
                            return callback(err);
                        }
                        if(_user){
                            var friends_arr = _user.friends;
                            friends_arr.push(params.user_id);
                            _user.update({friends: friends_arr}, function(err, _updated_doc){
                                res_obj.push(_updated_doc);
                                return series_cb();
                            });
                        } else {
                            return callback(new Error('Error making friends'));
                        }
                    });
                }
            ],
            function(series_err){
                if(series_err){
                    return callback(series_err);
                }
                return callback(null, res_obj);
            });

    }
};

module.exports = userCtrl;