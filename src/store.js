import { createStore, combineReducers } from 'redux';

/* eslint-disable no-underscore-dangle */
const reduxChromeExtensionConnection = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */

const reducers = combineReducers({});

export default createStore(reducers, {}, reduxChromeExtensionConnection);
