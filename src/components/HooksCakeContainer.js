import React from 'react';
import { useSelector  } from 'react-redux';
// useSelector is a hook the react redux library provides which acts as a closed equivalent to the mapStateToProps function 


const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.numOfCakes)
    
    return (
        <div>
            <h2>Num of cakes - {numOfCakes}</h2>
            <button>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer;
