const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookPairsSchema = new Schema({

    wineSubType: {
        type: String,
        required: true
    },
    wineType: {
        type: String,
        required: true
    },
    description: {
        type: [String],
        required: true,
        default: undefined
    },
    country: {
        type: String,
        required: true
    },
    titles: {
        type: [String]
    }
    
});

const BookPairs = mongoose.model("BookPairs", bookPairsSchema);

module.exports = BookPairs;
