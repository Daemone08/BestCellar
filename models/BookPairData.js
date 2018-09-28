const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookPairSchema = new Schema({
    wineSubType: {type: String, required: true},
    wineType: {type: String, required: true},
    description: [{type: String, required: true}], 
    country: {type: String, required: true} 
});

const BookPairData = mongoose.model("BookPairData", bookPairSchema);

module.exports = BookPairData;
