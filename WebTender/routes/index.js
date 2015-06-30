var express = require('express');
var router = express.Router();
var response = require('../modules/response.js');

router.get('/heartbeat', function(req, res, next){
    console.log('Beating...');
    return response.send200('OK', res);
});

//get login page
router.get('/login', function(req, res, next){
});

router.post('/login', function(req, res, next){
    console.log(req);
});

module.exports = router;