// import { ADD_GREETING, REMOVE_GREETING, FRENCHIFY } from "../constants/action-types";

// const initialState = {
//     greetings: [
//         { name: 'Jim', message: 'Hello' },
//         { name: 'Sally', message: 'Hello' },
//         { name: 'Bender', message: 'Hello' }
//     ]
// };

// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {

//         case ADD_GREETING:
//             return {
//                 ...state, greetings: state.greetings.concat(action.payload)
//             };

//         case REMOVE_GREETING:
//             return ({
//                 ...state,
//                 greetings: state.greetings.filter(greeting => action.payload.name !== greeting.name)
//             });

//         case FRENCHIFY:
//             return ({
//                 ...state,
//                 greetings: state.greetings.map((greeting, index) => {
//                     if (greeting.name === action.payload) {

//                         if (greeting.message == "Hello") {
//                             return {
//                                 ...greeting, message: "Bonjour"
//                             }
//                         }
//                         else
                        
//                             return {
//                                 ...greeting, message: "Hello"
//                             }
//                     }
//                     return greeting;
//                 })
//             });

//         default:
//             return state;
//     }
// };

// export default rootReducer;