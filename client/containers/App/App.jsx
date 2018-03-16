'use strict';

import React, { Component } from 'react';
import NavLink from '../../components/NavLink/NavLink';
require ('./index.css');

export default class App extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className='appContainer'>
				<div className="navBar">
					<div className="navWrap clearfix">
						<span className="huanLogo font34">
							Li Huan
						</span>
						<ul>
			                <li><NavLink to="/" onlyActiveOnIndex={true}>HOME</NavLink></li>
			    			<li><NavLink to="/about">ABOUT</NavLink></li>
			    			<li><NavLink to="/process">PROCESS</NavLink></li>
			    			<li><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
			    			<li><NavLink to="/contact">CONTACT</NavLink></li>
			    		</ul>
					</div>
				</div>
	    		
	    		<div className="content">
	    			{this.props.children}
	    		</div>
	    	</div>
		);
	}
}