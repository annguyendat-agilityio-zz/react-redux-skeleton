import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { Basic } from './Basic'

describe('Basic component', () => {

	function setup(user) {

		let props = {
			getAction: expect.createSpy(),
			basic: 'Redux react skeleton' 
		}

		let renderer = TestUtils.createRenderer()
		renderer.render(<Basic {...props} />);
		let output = renderer.getRenderOutput();

		return {
			output
		}
	}

	it('should render correctly', () => {

		const { output } = setup();

		expect(output.type).toBe('h1');
		expect(output.props.children).toBe('Redux react skeleton');
	})
})
