import React from 'react';
import { render } from 'react-dom';
import App from '../containers/App/App';
import HomePage from '../containers/HomePage/HomePage';
import About from '../containers/About/About';
import Process from '../containers/Process/Process';
import Portfolio from '../containers/Portfolio/Portfolio';
import Contact from '../containers/Contact/Contact';
import {Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';

module.exports = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage}/>
		<Route path="/about" component={About}/>
		<Route path="/process" component={Process}/>
		<Route path="/portfolio" component={Portfolio}/>
		<Route path="/contact" component={Contact}/>
	</Route>
);