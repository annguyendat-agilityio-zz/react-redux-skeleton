import './style/scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {
	createStore, applyMiddleware
}
from 'redux';
import {
	Router, Route, IndexRoute, browserHistory
}
from 'react-router';
import {
	Provider
}
from 'react-redux';
import Routes from './js/routers/Routes';
import appStore from './js/stores/AppStore';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = appStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

main();

function main() {

	const app = document.createElement('div');

	document.body.appendChild(app);

	ReactDOM.render(
	  <Provider store={store}>
	  	<Router history={history}>
	      {Routes}
	    </Router>
	  </Provider>,
	  app
	)
}
