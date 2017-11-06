
import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router-dom'

export default class Summary extends Component {
	constructor(){
        super()
        this.state = {
			displayIsOpen: true
        }
}

	handleClick() {
		this.setState({
            displayIsOpen: !this.state.displayIsOpen
        })
	}

	render(){
		return(
			<div className="widgetWide">
                <div className="summaryHeader">
                    <h2>Summary</h2>
                    <h2>History</h2>
                    {(this.state.displayIsOpen) ?
						<i className="fa fa-caret-down fa-2x" aria-hidden="true" onClick={this.handleClick.bind(this)}></i> :
						<i className="fa fa-caret-right fa-2x" aria-hidden="true" onClick={this.handleClick.bind(this)}></i>}
                    <i className="fa fa-cog fa-2x" aria-hidden="true"></i>
					{(this.state.displayIsOpen) ? <hr/> : null}
                </div>
				{(this.state.displayIsOpen) ?
					<div className="summaryInfo">
	                    <div className="summaryInfoBox">
	                        <p className="summaryInfoTitle">Recovery Tasks</p>
	                        <div className="circleChartOuter">
	                            <p className="circleChartInner">100%</p>
	                        </div>
	                    </div>
	                    <div className="verticalLine"></div>
	                    <div className="summaryInfoBox">
	                        <p className="summaryInfoTitle">Archive Tasks</p>
	                        <div className="circleChartOuter">
	                            <p className="circleChartInner">100%</p>
	                        </div>
	                    </div>
	                    <div className="verticalLine"></div>
	                    <div className="summaryInfoBox">
	                        <p className="summaryInfoTitle">Store Tasks</p>
	                        <div className="circleChartOuter">
	                            <p className="circleChartInner">100%</p>
	                        </div>
	                    </div>
	                    <div className="verticalLine"></div>
	                    <div className="summaryInfoBox">
	                        <p className="summaryInfoTitle">Pruning Tasks</p>
	                        <div className="circleChartOuter">
	                            <p className="circleChartInner">100%</p>
	                        </div>
	                    </div>
	                    <div className="verticalLine"></div>
	                    <div className="summaryInfoBox">
	                        <p className="summaryInfoTitle">Storage Locations</p>
	                        <div className="circleChartOuter2">
	                            <p className="circleChartInner">9508GB</p>
	                        </div>
	                    </div>
	                    <div className="verticalLine"></div>
	                    <div className="summaryInfoBox">
	                        <p className="summaryInfoTitle">% Archive Changed</p>
	                        <div className="circleChartOuter2">
	                            <p className="circleChartInner">5%</p>
	                        </div>
	                    </div>
	                    <div className="verticalLine"></div>
	                    <div className="summaryInfoBox">
	                        <p className="summaryInfoTitle">% Store Changed</p>
	                        <div className="circleChartOuter2">
	                            <p className="circleChartInner">26%</p>
	                        </div>
	                    </div>
	                </div>
				:
					null}

			</div>
		)
	}
}
