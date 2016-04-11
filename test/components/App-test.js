import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import App from '../../app/js/components/App'

describe('App component', () => {

	function setup(user) {

		let props = {
			getAction: expect.createSpy(),
			basic: 'Redux react skeleton'
		}

		let renderer = TestUtils.createRenderer()
		renderer.render(<App {...props} />);
		let output = renderer.getRenderOutput();

		return {
			output
		}
	}

	it('should render correctly when user not login', () => {

		const { output } = setup();

		expect(output.type).toBe('h1');
		expect(output.props.children).toBe('Redux react skeleton');
	})
})
