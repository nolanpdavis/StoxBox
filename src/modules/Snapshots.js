
import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router-dom'

export default class Snapshots extends Component {

	render(){
		return(
			<div className="widget">
				<i className="fa fa-camera fa-3x" aria-hidden="true"></i>
                <h3>63</h3>
                <p>Number of Snapshots</p>
			</div>
		)
	}
}
