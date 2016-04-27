import {
    combineReducers
} from 'redux';
import { routerReducer } from 'react-router-redux';
import BasicReducer from '../basic/BasicReducer';

const Reducer = combineReducers({
	BasicReducer,
	routing: routerReducer
});

export default Reducer;
