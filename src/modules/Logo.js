import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router-dom'
const logo = require('../../styles/img/aparaviLogo.svg')

export default class Archives extends Component {

	render(){
		return(
			<div className="mobileLogo">
				<img src={logo}/>
			</div>
		)
	}
}
