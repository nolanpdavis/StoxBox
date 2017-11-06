import React, { Component } from 'react'
import { Router, Route, NavLink } from 'react-router-dom'
import { AdminNav, SettingsNav } from '.'
const logo = require('../../styles/img/aparaviLogo.svg')

export default class Navbar extends Component {
	constructor(){
        super()
        this.state = {
            adminIsClicked: false,
			settingsIsClicked: false,
        }
}

	handleAdminClick(event) {
		event.preventDefault()
		this.setState({
            adminIsClicked: !this.state.adminIsClicked,
			settingsIsClicked: false
        })
	}

	handleSettingsClick(event) {
		event.preventDefault()
		this.setState({
            settingsIsClicked: !this.state.settingsIsClicked,
			adminIsClicked: false
        })
	}

	render(){
		return(
			<div>
				<div className={this.props.visible}>
					<img className="aparaviLogo" src={logo} alt="Aparavi Logo"/>
					<div className="navLinks">
						<div className="nonLinkNav">
							<h1>Dashboard</h1>
						</div>
						<div className="nonLinkNav">
							<h1>Recover</h1>
						</div>
						<div className="nonLinkNav" onClick={this.handleAdminClick.bind(this)}>
							<h1>Administration</h1>
						</div>
						{/*{this.state.adminIsClicked && <AdminNav/>}*/}
						<div className="nonLinkNav" onClick={this.handleSettingsClick.bind(this)}>
							<h1>Settings</h1>
						</div>
						{/*{this.state.settingsIsClicked && <SettingsNav/>}*/}
						<div className="nonLinkNav">
							<h1>Logout</h1>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
