const router = require("express").Router();
const bookPairRoutes = require("./bookPair");
const mealPairRoutes = require("./mealPair");

// Book Pair Routes
router.use("/bookPair", bookPairRoutes);
// Meal Pair Routes
router.use("/mealPair", mealPairRoutes);

module.exports = router;
