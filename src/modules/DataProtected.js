import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router-dom'

export default class DataProtected extends Component {

	render(){
		return(
			<div className="widget">
				<i className="fa fa-database fa-3x" aria-hidden="true"></i>
                <h3>6,277GB</h3>
                <p>Data Protected</p>
			</div>
		)
	}
}
