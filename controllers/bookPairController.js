const db = require('../models');

// Basic actions performed by  controller:
// 
//  Get/Find
//  Update
// 

module.exports = {

    // FIND ALL
    findAllBookPairs: function (req, res) {
        db.BookPairs
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // FIND ONE SUBTYPE DOCUMENT
    findBookPair: function (req, res) {
        db.BookPairs
            .find({ wineSubType: req.body.wineSubType })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // UPDATE ONE PROPERTY OF ONE SUBTYPE DOCUMENT
    updateWineSubType: function (req, res) {
        db.BookPairs
            .findOneAndUpdate(
                { wineSubType: req.body.wineSubType },
                { $addToSet: { titles: req.body.title } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

};