import configureMockStore from 'redux-mock-store';
import * as BasicAction from './BasicAction';
import expect from 'expect';
import thunk from 'redux-thunk';
import nock from 'nock';

// Mock store for the action prosime
const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares);

describe('Basic action', () => {

	it('create an action basic', () => {
		
		const expectedAction = {
			type: 'TYPE_ACTION'
		}

		expect(BasicAction.getAction()).toEqual(expectedAction)
	})
})
