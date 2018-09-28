const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealPairSchema = new Schema({
 
});

const MealPairData = mongoose.model("MealPairData", mealPairSchema);

module.exports = MealPairData;
