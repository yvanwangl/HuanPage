'use strict';

import React from 'react';
require('./index.css');

export default class EducationItem extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		let props = this.props;
		return (
			<li className='educationItem font18'>
				<span className='time'>{props.time}</span>
				<span className='dort'></span>
				<span className='university'>{props.university}</span>
				<span className='major'>{props.major}</span>
				<span className='record'>{props.record}</span>
			</li>
		);
	}
}