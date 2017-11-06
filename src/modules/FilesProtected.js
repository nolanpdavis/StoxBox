import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router-dom'

export default class DataProtected extends Component {

	render(){
		return(
			<div className="widget">
				<i className="fa fa-file fa-3x" aria-hidden="true"></i>
                <h3>4,430,528</h3>
                <p>Files Protected</p>
			</div>
		)
	}
}
