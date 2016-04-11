import { connect } from 'react-redux';
import App from '../components/App';
import { bindActionCreators } from 'redux';
import * as BasicAction from '../actions/BasicAction';

function mapStateToProps(state) {console.log(state.AppReducer.toJS());
  return state.AppReducer.toJS()
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BasicAction, dispatch);
}

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

export default AppContainer
