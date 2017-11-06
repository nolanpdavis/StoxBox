import React, { Component } from 'react'
import { Router, Route, NavLink } from 'react-router-dom'

export default class AdminNav extends Component {

	render(){
		return(
            <div className="miniNavLinks">
				<div className="nonLinkNav">
					<i className="fa fa-sitemap smallerIcon" aria-hidden="true"></i>
					<h1>Organizations</h1>
				</div>
				<div className="nonLinkNav">
					<i className="fa fa-user smallerIcon widthFix" aria-hidden="true"></i>
					<h1>Users & Roles</h1>
				</div>
				<div className="nonLinkNav">
					<i className="fa fa-bullhorn smallerIcon" aria-hidden="true"></i>
					<h1>Broadcast</h1>
				</div>
			</div>
		)
	}
}
