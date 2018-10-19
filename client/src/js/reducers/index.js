import { GET_MEALPAIRS, GET_MEALPAIRS_SUCCESS, GET_MEALPAIRS_FAILURE } from "../constants/action-types";

const initialState = {
    status: "",
    mealPairs: [],
    error: ""
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_MEALPAIRS:
            const requested = Object.assign({}, state,
                {
                    status: action.status
                })
            return requested

        case GET_MEALPAIRS_SUCCESS:
            const successful = Object.assign({}, state, {
                status: action.status,
                mealPairs: action.mealPairs
            })
            return successful

        case GET_MEALPAIRS_FAILURE:
            const failed = Object.assign({}, state, {
                status: action.status,
                error: action.error
            })
            return failed

        default:
            return state

    }
}

export default rootReducer;