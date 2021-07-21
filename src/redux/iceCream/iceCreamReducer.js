// Define reducer
// reducer(state, actioin) => return new state

import { BUY_ICECREAM } from './iceCreamTypes'

// 1. Define initial state
const initialState = {
    numOfIceCreams: 20
}

// 2. Define reducer function
const iceCreamReducer = (state = initialState, action) => {
    // body => swich statement
    switch(action.type) {
        case BUY_ICECREAM:
            return {
                // 아이스크림 갯수만 줄이기 위해 나머지는 그대로
                ...state, 
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state
    }
} 

export default iceCreamReducer; // export reducer