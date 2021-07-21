import React from 'react';
import { connect } from 'react-redux';

const ItemContainer = (props) => {
    return (
        <div>
            <h2>Item - {props.item}</h2>
        </div>
    )
}


// first param, redux state
// second param, the props of the comp itself which by convention is referred ot as ownProps
const mapStateToProps = (state, ownProps) => {
    // App.js props 로 cake를 전달함
    // ownProps.cake 가 있는지 없는지에 따라 분기
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams

    return {
        item: itemState
    }
}

export default connect(mapStateToProps)(ItemContainer);