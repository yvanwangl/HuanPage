'use strict';

import React from 'react';
require('./index.css');

export default class PersonInfo extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		let {personImg} = this.props;
		return (
			<div className='personInfoContainer clearfix'>
				{/*<img src={personImg} className='personImg'/>*/}
				{/*skills*/}
				<div className='skills'>
				</div>
				<div className='infoWrap'>
					<h1 className='font28'>Hi, I'm Li Huan</h1>
					<p className='font18'>我是一名交互设计师，现在就读于北京科技大学设计艺术学专业。我热爱交互设计，闲暇时也会学习前端Coding。这是我的个人网站。</p>
				</div>
			</div>
		);
	}
}