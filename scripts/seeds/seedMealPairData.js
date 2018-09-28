const mongoose = require("mongoose");
const db = require("../../models");
const mealPairData = require("mealPairData.json")

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/bestceller"
);

db.MealPairData
  .remove({})
  .then(() => db.MealPairData.collection.insertMany(mealPairData))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
