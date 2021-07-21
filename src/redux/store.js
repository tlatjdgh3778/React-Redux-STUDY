// Create Redux store and provide it to react app

// 1. Create redux store
import { createStore } from 'redux';
import cakeReducer from './cake/cakeReducer';

const store = createStore(cakeReducer) // createStore method accepts a reducer function as its parameter

export default store;

// 2. provide this store to react app (in App.js)
// import { Provider } from 'react-redux';
// import store from from './redux/store';
// <Provider store={store}> </Provider>