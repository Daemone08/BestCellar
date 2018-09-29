const mongoose = require("mongoose");
const db = require("../../models");
const bookPairsJSON = require("./bookPairs.json")


function bookPairsValidate(localJSON) {
  let validData = []
  for (let i = 0; i < localJSON.length; i++) {
    if (localJSON[i].country.length >= 1) {
      validData.push(localJSON[i]);
    }
  }
  return validData
}

let bookPairsSeeds = bookPairsValidate(bookPairsJSON)

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/bestceller"
);

db.BookPairs
  .remove({})
  .then(() => db.BookPairs.collection
    .insertMany(bookPairsSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
