import React, { Component } from 'react'
import { Navbar, DataProtected, FilesProtected, Recoveries, Archives, Appliances, Agents, Snapshots, Checkpoints, Summary, Health, LiveFeed, NavCircle, Logo } from '../modules'

export default class Recover extends Component {
	constructor(){
        super()
        this.state = {
			navIsOpen: true
        }
}

	handleNavOpen() {
		this.setState({
            navIsOpen: !this.state.navIsOpen
        })
	}

	render(){

		return(
			<div>
				<Logo/>
				<Navbar visible={(this.state.navIsOpen) ? "navLeft" : "navLeftGone"}/>
				<NavCircle navCircleOpen={(this.state.navIsOpen) ? "navCircleOpen" : "navCircleClosed"} onClick={this.handleNavOpen.bind(this)}/>
				<div className={(this.state.navIsOpen) ? "bodyContent" : "bodyContent2"}>
					<h1>Rod, let me be your design guy!</h1>
				</div>
			</div>
		)
	}
}
