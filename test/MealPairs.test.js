var expect = require("chai").expect

var MealPairs = require("../models/MealPairs")

describe("MealPairs model", function () {

    it("should be invalid if wineType is empty", function (done) {
        var newMealPairs = new MealPairs()
        newMealPairs.validate(function (err) {
            expect(err.errors.wineType).to.exist
            done()
        });
    });

    it("should be invalid if wineSubTypes is empty", function (done) {
        var newMealPairs = new MealPairs()
        newMealPairs.validate(function (err) {
            expect(err.errors.wineSubTypes).to.exist
            done()
        });
    });

    it("should be invalid if mealPairs is empty", function (done) {
        var newMealpairs = new MealPairs()
        newMealpairs.validate(function (err) {
            expect(err.errors.mealPairs).to.exist
            done()
        });
    });

});
