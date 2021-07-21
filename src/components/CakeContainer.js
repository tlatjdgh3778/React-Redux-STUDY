import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/index';

const CakeContainer = (props) => {
    return(
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
}

// 1. the state from the redux store is mapped to our comp props
// Define mapStateToProps to access the redux state in your comp
// It gets the redux state as a parameter.(state is retrieve state properties. ex> state.numOfCakes)
// Using JSX state.numOfCakes
const mapStateToProps = state => { // selector
    return {
        numOfCakes: state.numOfCakes 
    }
}
// 2. map our dispatch of an asction creator to a prop in our comp
// To allow us to map action creators to props in our comp
// Allow us call {props.buyCake}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
// 3. Connect these two functions with our react comp
// connect cakeContainer to the redux store
// basic pattern
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CakeContainer);

// React Redux + Hooks is aliternative to the existing connect higher-order component
// Subscribe to store and dispatch actions without connect()