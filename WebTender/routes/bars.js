var express = require('express');
var router = express.Router();

/* GET bars listing. */
router.get('/', function(req, res, next) {
    //return nearby bars
});

router.put('/:id', function(req, res, next){
    //update bar profile
});

router.post('/', function(req, res, next){
    //create new bar profile
});

module.exports = router;
