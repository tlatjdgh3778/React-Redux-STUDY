// Define reducer
// reducer(state, action) => return new state
import { BUY_CAKE } from './cakeTypes'; // action.type

// 1. Define initial state
const initialState = {
    numOfCakes: 10
}

// 2. Define reducer function
const cakeReducer = (state = initialState, action) => {
    // body => swich statement
    switch(action.type) { // action.type is BUY_CAKE,,
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes: state.numOfCakes - 1 // state.numOfCakes is current numOfCakes
            }
        default:
            return state
    }
}

export default cakeReducer;  // use reducer in a diff file

