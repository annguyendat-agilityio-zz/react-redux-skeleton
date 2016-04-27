import expect from 'expect'
import { fromJS } from 'immutable';
import BasicReducer from './BasicReducer'

describe('Basic reducer', () => {

	it('should return the initial state', () => {

		expect(BasicReducer(fromJS({}), {})).toEqual(fromJS({}))
	})

	it('Should handle action', () => {

		expect(BasicReducer(fromJS({}), {
			type: 'TYPE_ACTION'
		})).toEqual(fromJS({
			basic: 'Redux react skeleton'
		}));
	})
})
