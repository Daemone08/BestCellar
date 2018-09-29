const mongoose = require("mongoose");
const db = require("../../models");
const mealPairsJSON = require("./mealPairs.json")

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/bestceller"
);

db.MealPairs
  .remove({})
  .then(() => db.MealPairs.collection
  .insertMany(mealPairsJSON))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

