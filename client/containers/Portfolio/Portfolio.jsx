'use strict';

import React from 'react';
require('./index.css');

export default class Portfolio extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className='portfolioContainer'>
				Portfolio
			</div>
		);
	}
}