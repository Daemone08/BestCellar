module.exports.validMealPairsOne = function () {
    return {
        wineType: "Dry White",
        wineSubTypes: [
            "Sauvignon Blanc",
            "Grüner Veltliner",
            "Pinot Grigio",
            "Albariño"
        ],
        mealPairs: [
            "Vegetables",
            "Roasted Vegetables",
            "Fish"
        ]
    };
}

module.exports.defaultModelMealPair = function () {
    return {
        wineType: "",
        wineSubTypes: undefined,
        mealPairs: undefined
    };
}

module.exports.validMealPairsTwo = function () {
    return {
        wineType: "Light Red",
        wineSubTypes: [
            "St. Laurent",
            "Pinot Noir",
            "Zweigelt",
            "Gamay"
        ],
        mealPairs: [
            "Roasted Vegetables",
            "Shellfish",
            "White Meat"
        ]
    };
}

module.exports.randomDocument = function(array) {
    return array[Math.floor(Math.random() * array.length)]
}