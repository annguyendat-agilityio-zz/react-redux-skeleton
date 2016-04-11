import {
    combineReducers
} from 'redux';
import { routerReducer } from 'react-router-redux';
import AppReducer from './AppReducer';

const RootReducer = combineReducers({
	AppReducer,
	routing: routerReducer
});

export default RootReducer;
