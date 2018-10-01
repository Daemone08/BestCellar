const db = require('../models');

// Basic actions performed by  controller:
// 
//  Get/Find
//  
// 

module.exports = {

    // only method needed is to find all (8) docs. Is a filter by mealPair needed? Get the docs on component load?
    // FIND ALL
    findAllMealPairs: function (req, res) {
		db.MealPairs
			.find({})
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
};