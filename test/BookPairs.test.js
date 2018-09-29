var expect = require("chai").expect

var BookPairs = require("../models/BookPairs")

describe("BookPairs model", function () {

    it("should be invalid if wineSubType is empty", function (done) {
        var bookPairs = new BookPairs()
        bookPairs.validate(function (err) {
            expect(err.errors.wineSubType).to.exist
            done()
        });
    });

    it("should be invalid if wineType is empty", function (done) {
        var bookPairs = new BookPairs()
        bookPairs.validate(function (err) {
            expect(err.errors.wineType).to.exist
            done()
        });
    });

    it("should be invalid if description is empty", function (done) {
        var bookPairs = new BookPairs()
        bookPairs.validate(function (err) {
            expect(err.errors.description).to.exist
            done()
        });
    });

    it("should be invalid if country is empty", function (done) {
        var bookPairs = new BookPairs()
        bookPairs.validate(function (err) {
            expect(err.errors.country).to.exist
            done()
        });
    });

});
