import React, { Component } from 'react'
import { Stocklist, AboutText, Chart, Description } from '../modules'

export default class Dashboard extends Component {
	constructor(){
        super()
}

	render(){

		return(
			<div>
				<AboutText/>
				<Chart/>
				<Description/>
				<Stocklist/>
			</div>
		)
	}
}
