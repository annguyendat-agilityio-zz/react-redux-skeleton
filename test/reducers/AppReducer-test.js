import expect from 'expect'
import { fromJS } from 'immutable';
import AppReducer from '../../app/js/reducers/AppReducer'

describe('AppReducer reducer', () => {

	it('should return the initial state', () => {

		expect(AppReducer(fromJS({}), {})).toEqual(fromJS({}))
	})

	it('Should handle action', () => {

		expect(AppReducer(fromJS({}), {
			type: 'TYPE_ACTION'
		})).toEqual(fromJS({
			basic: 'Redux react skeleton'
		}));
	})
})
