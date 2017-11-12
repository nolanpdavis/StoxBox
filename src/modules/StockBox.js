import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import actions from '../actions'
import { connect } from 'react-redux'

class StockBox extends Component {
	constructor(){
        super()
        this.state = {
			isActive: false
        }
	}

	handleClick() {
		this.props.companyReceived(this.props.stock)
	}

	render(){

		return(
			<div className="stockBox" onClick={this.handleClick.bind(this)}>
				{(this.props.company.company == this.props.stock.company) ? <p className="stockCompany">{this.props.stock.company}</p> : <h2 className="stockTicker">{this.props.stock.ticker}</h2>}
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

export default connect(stateToProps, dispatchToProps)(StockBox)
