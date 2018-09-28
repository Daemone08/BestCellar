const mongoose = require("mongoose");
const db = require("../../models");
const bookPairData = require("bookPairData.json")

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/bestceller"
);

db.BookPairData
  .remove({})
  .then(() => db.BookPairData.collection.insertMany(bookPairData))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
