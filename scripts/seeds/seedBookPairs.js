const mongoose = require("mongoose");
const db = require("../../models");
const bookPairsJSON= require("./bookPairs.json")

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/bestceller"
);

db.BookPairs
  .remove({})
  .then(() => db.BookPairs.collection
  .insertMany(bookPairsJSON))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
