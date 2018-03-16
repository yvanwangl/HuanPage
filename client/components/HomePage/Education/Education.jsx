'use strict';

import React from 'react';
import EducationItem from '../EducationItem/EducationItem';
require('./index.css');
let educationData=[
	{
		time:'2014.09 - 2017.01',
		university:'北京科技大学',
		major:'设计艺术学',
		record:'硕士'
	},
	{
		time:'2010.09 - 2014.06',
		university:'北华航天工业大学',
		major:'工业设计',
		record:'本科'
	}
];

export default class Education extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		let items = [];
		educationData.map((item, index)=>items.push(<EducationItem key={index} {...item}/>));
		return (
			<div className='educationContainer clearfix'>
				<ul className="educationList">
					{items}
				</ul>	
			</div>
		);
	}
}