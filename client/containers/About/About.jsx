'use strict';

import React from 'react';
require('./index.css');

export default class About extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className='abountContainer'>
				About
			</div>
		);
	}
}