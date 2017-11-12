import React, { Component } from 'react'
import actions from '../actions'
import { connect } from 'react-redux'

class Chart extends Component {
	constructor(){
        super()
        this.state = {
        }
}

	render(){

		return(
			<div>
				<h1>{this.props.company.company}</h1>
				<p>API key: IDVAQJNIJEKATGPO</p>
			</div>
		)
	}
}

const stateToProps = (state) => {
    return {
        company: state.company.currentCompany
    }
}

const dispatchToProps = (dispatch) => {
    return {
        companyReceived: (company) => dispatch(actions.companyReceived(company))
    }
}

export default connect(stateToProps, dispatchToProps)(Chart)