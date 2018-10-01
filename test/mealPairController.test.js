let mongoose = require("mongoose");
let db = require('../models');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
let app = require('express')

chai.use(chaiHttp);

//Our parent block
describe('MealPairs Controller', () => {

     describe('/GET meal pairs', () => {

         it('it should GET all meal pairs', (done) => {
            chai.request('http://localhost:3001')
                .get('/api/mealPairs')
                .end((err, res) => {

                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(8);

                    done();
                });
        });
    });

});