const router = require("express").Router();
const bookPairsRoutes = require("./bookpairs");
const mealPairsRoutes = require("./mealpairs");

// Book Pair Routes
router.use("/bookpairs", bookPairsRoutes);
// Meal Pair Routes
router.use("/mealpairs", mealPairsRoutes);

module.exports = router;
