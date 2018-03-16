'use strict';

import React from 'react';
import PersonInfo from '../../components/HomePage/PersonInfo/PersonInfo';
import Education from '../../components/HomePage/Education/Education';
import HomePageData from './HomePageData';
require('./index.css');

export default class HomePage extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className='homePageContainer'>
				<PersonInfo {...HomePageData}/>
				{/*<Education />*/}
			</div>
		);
	}
}