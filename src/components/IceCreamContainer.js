import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux/index';

const IceCreamContainer = (props) => {
    return(
        <div>
            <h2>Number of iceCreams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    );
}

// 1. the state from the redux store is mapped to our comp props
// Define mapStateToProps to access the redux state in your comp
// It gets the redux state as a parameter.(state is retrieve state properties. ex> state.numOfIceCreams)
// Using JSX state.numOfIceCreams
const mapStateToProps = state => { // selector
    return {
        // numOfIceCreams: state.numOfIceCreams
        // rootReducer 에서 바뀌었기 때문
        numOfIceCreams: state.iceCream.numOfIceCreams 
    }
}
// 2. map our dispatch of an asction creator to a prop in our comp
// To allow us to map action creators to props in our comp
// Allow us call {props.buyIceCream}
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}
// 3. Connect these two functions with our react comp
// connect iceCreamContainer to the redux store
// basic pattern
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(IceCreamContainer);

// React Redux + Hooks is aliternative to the existing connect higher-order component
// Subscribe to store and dispatch actions without connect()