import {
    createStore,
    applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';
import logger from '../devs/DevTools';
import rootReducer from '../reducers/RootReducer';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Create an enhanced history that syncs navigation events with the store
const enhancer = applyMiddleware(thunk, logger, routerMiddleware(browserHistory));

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}

