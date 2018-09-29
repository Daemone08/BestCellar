const router = require("express").Router();
const bookPairsRoutes = require("./bookPairs");
const mealPairsRoutes = require("./mealPairs");

// Book Pair Routes
router.use("/bookPairs", bookPairsRoutes);
// Meal Pair Routes
router.use("/mealPairs", mealPairsRoutes);

module.exports = router;
