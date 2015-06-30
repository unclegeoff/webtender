/*
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bars = require('../models/bar.js');
var Deals = require('../models/deal.js');

*/
/** GET bars listing. *//*

router.get('/', function(req, res) {
    Bars.find({}, function(err, results){
        if(err){
            return err;
        } else {
            res.send(results);
        }
    });
});

*/
/** CREATE bar profile *//*

router.post('/', function(req, res){

});

*/
/** GET specific bar *//*

router.get('/:id', function(req, res){
    res.send(Bars.findOne({_id: req.body.id}));
});

*/
/** UPDATE bar profile *//*

router.put('/:id', function(req, res){

});

module.exports = router;
*/

module.exports = function(app){
    console.log('setting up bar routes')
}