import Immutable from 'immutable';

const initialState = Immutable.fromJS({});

const BasicReducer = (state = initialState, action) => {
	switch (action.type) {

		case 'TYPE_ACTION':

			return state.merge({
				basic: 'Redux react skeleton'
			})
			break;

		default:
			return state
	}
}

export default BasicReducer
