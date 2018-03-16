'use strict';

import React, { Component } from 'react';
import {Link} from 'react-router';
require ('./index.css');

export default class NavLink extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<Link {...this.props} activeClassName='active'/>
		);
	}
}