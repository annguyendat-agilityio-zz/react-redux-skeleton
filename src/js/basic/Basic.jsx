import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BasicAction from './BasicAction';

export class Basic extends React.Component {

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


function mapStateToProps(state) {console.log(state.BasicReducer.toJS());
  return state.BasicReducer.toJS()
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BasicAction, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Basic)
