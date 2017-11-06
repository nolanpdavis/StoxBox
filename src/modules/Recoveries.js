import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router-dom'

export default class Recoveries extends Component {

	render(){
		return(
			<div className="widget">
				<i className="fa fa-ambulance fa-3x" aria-hidden="true"></i>
                <h3>4</h3>
                <p>Number of Recoveries</p>
			</div>
		)
	}
}
