const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealPairSchema = new Schema({
    wineType: {type: String, required: true},
    wineSubTypes: [{type: String, required: true}],
    mealPairs: [{type: String, required: true}]
});

const MealPairData = mongoose.model("MealPairData", mealPairSchema);

module.exports = MealPairData;
