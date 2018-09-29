var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var mongoose = require('mongoose');
require('sinon-mongoose');

var db = require('../models');

describe("Get all meal pair data", function () {

    it("should return all meal pairs", function(done){
        var mealPairsMock = sinon.mock(db.MealPairs);
        var expectedResult = {status: true, wineType: "", winSubTypes: undefined, mealPairs: undefined};
        mealPairsMock.expects('find').yields(null, expectedResult);
        db.MealPairs.find(function (err, result) {
            mealPairsMock.verify();
            mealPairsMock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });

    // Test will pass if we fail to get a todo
    it("should return error", function (done) {
        var mealPairsMock = sinon.mock(db.MealPairs);
        var expectedResult = { status: false, error: "Something went wrong" };
        mealPairsMock.expects('find').yields(expectedResult, null);
        db.MealPairs.find(function (err, result) {
            mealPairsMock.verify();
            mealPairsMock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });
});