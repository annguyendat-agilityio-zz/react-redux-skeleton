import React from 'react';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

		const { getAction } = this.props;

		getAction();
	}

	render() {

		return (
			<h1>{this.props.basic}</h1>
		)
	}
}
