let mongoose = require("mongoose");
let db = require('../models');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
let app = require('express');
let mealPairsJSON = require('../scripts/seeds/mealPairs.json');

chai.use(chaiHttp);

describe('Meal Pairs Controller', () => {

    describe('/GET meal pairs', () => {


        it('it should get a status 200 response', (done) => {
            chai.request('http://localhost:3001')
                .get('/api/mealpairs')
                .end((err, res) => {

                    res.should.have.status(200);

                    done();
                });
        });

        it('it should get an array', (done) => {
            chai.request('http://localhost:3001')
                .get('/api/mealPairs')
                .end((err, res) => {

                    res.body.should.be.a('array');

                    done();
                });
        });

        it('it should get all meal pair documents but no more', (done) => {
            chai.request('http://localhost:3001')
                .get('/api/mealpairs')
                .end((err, res) => {

                    res.body.length.should.be.eql(mealPairsJSON.length);

                    done();
                });
        });

        it('it should get documents with the correct keys', (done) => {
            chai.request('http://localhost:3001')
                .get('/api/mealpairs')
                .end((err, res) => {

                    res.body.forEach(document => {
                        
                        document.should.include.keys('_id','wineType','wineSubTypes','mealPairs');

                    });

                    done();
                });
        });
    });
});