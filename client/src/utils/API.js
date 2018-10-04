import axios from "axios";

export default {

    // Book Pairs API Helpers
    findAllBookPairs: function () {
        return axios.get("/api/bookpairs")
    },

    findBookPair: function (wineSubType) {
        return axios.post("/api/bookpairs", wineSubType)
    },

    updateBookPair: function (bookTitle) {
        return axios.post("api/bookpairs/update", bookTitle)
    },

    // NYT API HELPER

    // Meal Pairs API Helpers
    findAllMealPairs: function () {
        return axios.get("api/mealpairs")
    }

}