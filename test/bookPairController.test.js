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

    let testWineSubType = factories.randomDocument(bookPairsJSON).wineSubType
    let testTitle = 'test title'

    after('Clear test book titles', (done) => {
        db.BookPairs.findOneAndUpdate(
            { 'wineSubType': testWineSubType },
            { $pull: { 'bookTitles': testTitle } },
            { new: true })
        .then(() => done())
        .catch(err => res.status(422).json(err));
    })

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

        it('it should get one book pair document', (done) => {
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

    describe('/UPDATE one book pair', () => {

        it('it should get a status 200 response', (done) => {
            chai.request('http://localhost:3001')
                .post('/api/bookpairs/update')
                .send({
                    wineSubType: testWineSubType,
                    bookTitles: testTitle
                })
                .end((err, res) => {

                    res.should.have.status(200);

                    done();
                });
        });

        it('it should get an object', (done) => {
            chai.request('http://localhost:3001')
                .post('/api/bookpairs/update')
                .send({
                    wineSubType: testWineSubType,
                    bookTitles: testTitle
                })
                .end((err, res) => {

                    res.body.should.be.a('object');

                    done();
                });
        });

        it('it should return a document with the correct keys', (done) => {
            chai.request('http://localhost:3001')
                .post('/api/bookpairs/update')
                .send({
                    wineSubType: testWineSubType,
                    bookTitles: testTitle
                })
                .end((err, res) => {

                    res.body.should.include.keys('_id', 'wineSubType', 'wineType', 'description', 'country', 'bookTitles');

                    done();
                });
        });

        it('it should return a document with the book title inserted', (done) => {
            chai.request('http://localhost:3001')
                .post('/api/bookpairs/update')
                .send({
                    wineSubType: testWineSubType,
                    bookTitles: testTitle
                })
                .end((err, res) => {

                    res.body.bookTitles.should.include(testTitle);

                    done();
                });
        });

        it("it shouldn't return a document with the book title present more than once", (done) => {
            chai.request('http://localhost:3001')
                .post('/api/bookpairs/update')
                .send({
                    wineSubType: testWineSubType,
                    bookTitles: testTitle
                })
                .end((err, res) => {

                    let bookTitlesString = res.body.bookTitles.toString()
                    bookTitlesString.should.not.include(testTitle + "," + testTitle);

                    done();
                });
        });
    });
});