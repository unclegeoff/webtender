//modules
var express = require('express');
var router = express.Router();
var response = require('../modules/response.js')

//controller
var users = require('../controllers/users.js');

router.post('/', function(req, res, next){
    req.checkBody('first_name', 'Invalid First Name').notEmpty().isAlpha();
    req.checkBody('last_name', 'Invalid Last Name').notEmpty().isAlpha();

    var req_errs = req.validationErrors(true);
    if(req_errs){
        return res.status(400).send({error: req_errs});
    }

    var params = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };

    users.add(params, function(err, _user){
        if(err){
            return res.status(500).send('Error creating new user.');
        }
        return res.json(_user);
    });
});

router.get('/:id', function(req, res, next){
    req.checkParams('id', 'Invalid User ID').notEmpty().isAlphanumeric();

    var req_errs = req.validationErrors(true);
    if(req_errs){
        return res.status(400).send({error: req_errs});
    }

    users.findUser(req.params, function(err, _user){
        if(err){
            if(err.status && err.status === 404){
                return res.status(404).send('User Not Found');
            } else {
                return res.status(500).send('Error finding user.');
            }
        }
        return res.json(_user);
    });
});

router.put('/:user_id/add_friend/:friend_id', function(req, res, next){
    req.checkParams('user_id').notEmpty().isAlphanumeric();
    req.checkParams('friend_id').notEmpty().isAlphanumeric();

    var req_errs = req.validationErrors(true);
    if(req_errs){
        return res.status(400).send({error: req_errs});
    }

    users.addFriend(req.params, function(err, _user){
        if(err){
            if(err.status && err.status === 404){
                return res.status(404).send('User Not Found');
            } else {
                return res.status(500).send('Error finding user.');
            }
        }
        return res.json(_user);
    });
});

module.exports = router;