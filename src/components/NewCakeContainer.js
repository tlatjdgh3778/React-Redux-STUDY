import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/index';

const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1)
    return(
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    );
}

// 1. the state from the redux store is mapped to our comp props
// Define mapStateToProps to access the redux state in your comp
// It gets the redux state as a parameter.(state is retrieve state properties. ex> state.numOfCakes)
// Using JSX state.numOfCakes
const mapStateToProps = state => { // selector
    return {
        // numOfCakes: state.numOfCakes 
        // rootReducer 에서 참조가 바뀌었기 때문
        numOfCakes: state.cake.numOfCakes
    }
}
// 2. map our dispatch of an asction creator to a prop in our comp
// To allow us to map action creators to props in our comp
// Allow us call {props.buyCake}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}
// 3. Connect these two functions with our react comp
// connect cakeContainer to the redux store
// basic pattern
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(NewCakeContainer);

// React Redux + Hooks is aliternative to the existing connect higher-order component
// Subscribe to store and dispatch actions without connect()