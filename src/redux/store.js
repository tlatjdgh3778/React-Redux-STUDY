// Create Redux store and provide it to react app

// 1. Create redux store
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import cakeReducer from './cake/cakeReducer';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from 'redux-logger';

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(logger, thunk))) 
    // createStore method accepts a reducer function as its parameter

export default store;

// 2. provide this store to react app (in App.js)
// import { Provider } from 'react-redux';
// import store from from './redux/store';
// <Provider store={store}> </Provider>

// How to Apply Logger MiddleWare 
// 1. import logger from 'redux-logger'
// 2. import { applyMiddleware } from 'redux'
// 3. const store = create(rootReduer, applayMiddleware(logger))
// 4. 브라우저 콘솔에서 확인