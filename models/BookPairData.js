const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookPairSchema = new Schema({
 
});

const BookPairData = mongoose.model("BookPairData", bookPairSchema);

module.exports = BookPairData;
