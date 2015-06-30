var supertest = require('supertest');
var expect = require('chai').expect;
var should = require('chai').should();
var api = supertest('http://localhost:3000');
var _ = require('underscore');

/*
describe('User', function(){
    it('should create user Adam Navaro', function(done){
        api.post('/users')
            .set('Accept', 'application/json')
            .send({
                first_name: 'Adam',
                last_name: 'Navarro'
            })
            .expect(200, done);
    });
});*/

describe('Heartbeat', function(){
    it('should get an OK message', function(done){
        api.get('/heartbeat')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});

var adamID = ''; //for after we make the account
var geoffID = '';

describe('Users', function(){
    it('should create user Adam Navarro', function(done){
        api.post('/users')
            .set('Accept', 'application/json')
            .send({
                first_name: 'Adam',
                last_name: 'Navarro'
            })
            .expect(200)
            .end(function(err, result){
                if(err) {
                    return done(err);
                } else {
                    adamID = result.body._id;
                    return done();
                }
            });
    });

    it('should get user Adam Navarro: ' + adamID, function(done){
        api.get('/users/' + adamID)
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, result){
                if(err) {
                    return done(err);
                } else {
                    if(result.res.body._id !== adamID){
                        return done(new Error('Returned wrong object: ' + result.res.body._id));
                    }
                    return done();
                }
            });
    });

    it('should create user Geoff Gilles', function(done){
        api.post('/users')
            .set('Accept', 'application/json')
            .send({
                first_name: 'Geoff',
                last_name: 'Gilles'
            })
            .expect(200)
            .end(function(err, result){
                if(err) {
                    return done(err);
                } else {
                    geoffID = result.body._id;
                    return done();
                }
            });
    });

    it('should get user Geoff Gilles: ' + adamID, function(done){
        api.get('/users/' + geoffID)
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, result){
                if(err) {
                    return done(err);
                } else {
                    if(result.res.body._id !== geoffID){
                        return done(new Error('Returned wrong object: ' + result.res.body._id));
                    }
                    return done();
                }
            });
    });

    it('should add Geoff to Adam\'s friends and vice versa', function(done){
        api.put('/users/' + adamID + '/add_friend/' + geoffID)
            .expect(200)
            .end(function(err, results){
                if(err) {
                    return done(err);
                } else {
                    if(!_.contains(results.res.body[adamID].friends, geoffID) || !_.contains(results.res.body[geoffID].friends, adamID)){
                        return done(new Error('Error making friends: ' + results.res.body));
                    }
                    return done();
                }
            });
    });
});