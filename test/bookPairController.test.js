let mongoose = require("mongoose");
let db = require('../models');
let factories = require('./factories')

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
let app = require('express');
let bookPairsJSON = require('../scripts/seeds/bookPairs.json');

chai.use(chaiHttp);

describe('Book Pairs Controller', () => {

    describe('/GET book pairs', () => {

        it('it should get a status 200 response', (done) => {
            chai.request('http://localhost:3001')
                .get('/api/bookpairs')
                .end((err, res) => {

                    res.should.have.status(200);

                    done();
                });
        });

        it('it should get an array', (done) => {
            chai.request('http://localhost:3001')
                .get('/api/bookpairs')
                .end((err, res) => {

                    res.body.should.be.a('array');

                    done();
                });
        });

        it('it should get all book pair documents', (done) => {
            chai.request('http://localhost:3001')
                .get('/api/bookpairs')
                .end((err, res) => {

                    res.body.length.should.be.eql(bookPairsJSON.length);

                    done();
                });
        });

        it('it should get documents with the correct keys', (done) => {
            chai.request('http://localhost:3001')
                .get('/api/bookpairs')
                .end((err, res) => {

                    res.body.forEach(document => {

                        document.should.include.keys('_id', 'wineSubType', 'wineType', 'description', 'country', 'bookTitles');

                    });

                    done();
                });
        });
    });
    describe('/GET one book pair', () => {

        let testWineSubType = factories.randomDocument(bookPairsJSON).wineSubType

        it('it should get a status 200 response', (done) => {
            chai.request('http://localhost:3001')
                .post('/api/bookpairs')
                .send({ wineSubType: testWineSubType })
                .end((err, res) => {

                    res.should.have.status(200);

                    done();
                });
        });

        it('it should get an array', (done) => {
            chai.request('http://localhost:3001')
                .post('/api/bookpairs')
                .send({ wineSubType: testWineSubType })
                .end((err, res) => {

                    res.body.should.be.a('array');

                    done();
                });
        });

        it('it should get one book pair documents', (done) => {
            chai.request('http://localhost:3001')
                .post('/api/bookpairs')
                .send({ wineSubType: testWineSubType })
                .end((err, res) => {

                    res.body.length.should.be.eql(1);

                    done();
                });
        });



        it('it should get a document with the correct keys', (done) => {
            chai.request('http://localhost:3001')
                .post('/api/bookpairs')
                .send({ wineSubType: testWineSubType })
                .end((err, res) => {

                    res.body[0].should.include.keys('_id', 'wineSubType', 'wineType', 'description', 'country', 'bookTitles');

                    done();
                });
        });
    });
});