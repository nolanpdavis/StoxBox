import React, { Component } from 'react'
import { getDescription } from '../utils/getDescription'
import actions from '../actions'
import { connect } from 'react-redux'

class Description extends Component {
	constructor(){
        super()
        this.state = {
			company: "",
			description: "",
			id: 0
        }
}
	componentWillMount(){
		getDescription(this.props.company.company, (err, response) => {
			const obj = response.query.pages
			var result = Object.keys(obj).map(function(key) {
  			return [Number(key), obj[key]];
			})

			const descExtract = result[0][1].extract;
			let indexNo = this.state.id
			indexNo += 1
			this.setState({
				description: descExtract,
				id: indexNo,
				company: this.props.company.company
			})
		})
	}


	componentDidUpdate() {
		if (this.props.company.company == this.state.company) {
			return
		}
		getDescription(this.props.company.company, (err, response) => {
			const obj = response.query.pages
			var result = Object.keys(obj).map(function(key) {
  			return [Number(key), obj[key]];
			})

			const descExtract = result[0][1].extract;
			let indexNo = this.state.id
			indexNo += 1
			this.setState({
				description: descExtract,
				id: indexNo,
				company: this.props.company.company
			})
		})
	}

	render(){

		return(
			<div>
                <div key={this.state.id} dangerouslySetInnerHTML={{__html: this.state.description}} />
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

export default connect(stateToProps, dispatchToProps)(Description)
