// src/js/actions/index.js
import { GET_MEALPAIRS, GET_MEALPAIRS_SUCCESS, GET_MEALPAIRS_FAILURE } from "../constants/action-types";

export const getMealPairs = () => ({
    type: GET_MEALPAIRS,
    status: "loading"
});

export const getMealPairsSuccess = (mealPairs) => ({
    type: GET_MEALPAIRS_SUCCESS,
    status: "success",
    mealPairs
});

export const getMealPairsFailure = (error) => ({
    type: GET_MEALPAIRS_FAILURE,
    status: "error",
    error
});
