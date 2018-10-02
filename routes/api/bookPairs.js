const router = require("express").Router();
const bookPairController = require("../../controllers/bookPairController");

router
    // Matches with "/api/bookPairs"
    .route("/")
    .get(bookPairController.findAllBookPairs)
    .post(bookPairController.findBookPair)

router
    // Matches with /apiBookPairs/update
    .route("/update")
    .post(bookPairController.updateWineSubType)

module.exports = router;
