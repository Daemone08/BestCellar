var expect = require('chai').expect;
var sinon = require('sinon');
var db = require('../models')
var mealPairController = require('../controllers/mealPairController')
var factories = require('./factories')

describe('mealPairController', function () {
    beforeEach(function () {
        sinon.stub(db.MealPairs, 'find');
    });


    afterEach(function () {
        db.MealPairs.find.restore();
    });

    it('should send all meal pair data', function () {
        var a = factories.validMealPairsOne();
        var b = factories.validMealPairsTwo();
        var expectedModels = [a, b];
        db.MealPairs.find.yields(null, expectedModels);
        var req = { params: {} };
        var res = {
            send: sinon.stub()
        };

        mealPairController.findAllMealPairs(req, res)

        sinon.assert.calledWith(res.send, expectedModels);
    });
});