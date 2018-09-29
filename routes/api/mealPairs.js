const router = require("express").Router();
const mealPairController = require("../../controllers/mealPairController");

// Matches with "/api/mealPairs"
router

    .route("/")
    .get(mealPairController.findAllMealPairs)

module.exports = router;
