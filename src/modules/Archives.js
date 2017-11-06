import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router-dom'

export default class Archives extends Component {

	render(){
		return(
			<div className="widget">
				<i className="fa fa-archive fa-3x" aria-hidden="true"></i>
                <h3>150</h3>
                <p>Number of Archives</p>
			</div>
		)
	}
}
