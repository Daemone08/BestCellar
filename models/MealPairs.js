const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealPairsSchema = new Schema({

    wineType: {
        type: String,
        required: true,
        default: ""
    },
    wineSubTypes: {
        type: [String],
        required: true,
        default: undefined
    },
    mealPairs:{
        type: [String], 
        required: true,
        default: undefined
    }

});

const MealPairs = mongoose.model("MealPairs", mealPairsSchema);

module.exports = MealPairs;
