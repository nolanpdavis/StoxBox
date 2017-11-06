
import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router-dom'

export default class Checkpoints extends Component {

	render(){
		return(
			<div className="widget">
				<i className="fa fa-check fa-3x" aria-hidden="true"></i>
                <h3>49</h3>
                <p>Number of Checkpoints</p>
			</div>
		)
	}
}
