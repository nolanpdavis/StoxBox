import React, { Component } from 'react'
import actions from '../actions'
import { connect } from 'react-redux'
import { getDailyStock } from '../utils/getDailyStock'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'

class Chart extends Component {
	constructor(){
        super()
		this.createBarChart = this.createBarChart.bind(this),
        this.state = {
			company: "",
			data: [],
			size: [500, 500],
			id: 0
        }
}
	componentWillMount(){
		this.createBarChart();
		getDailyStock(this.props.company.ticker, (err, response) => {
			const rawData = response["Time Series (Daily)"]
			var result = Object.keys(rawData).map(function(key) {
  			return [String(key), rawData[key]];
			})
			const data = []
			for (let i=0;i<31;i++)
				data.push(result[i]);
			let indexNo = this.state.id
			indexNo += 1
			this.setState({
				data: data,
				id: indexNo,
				company: this.props.company.company
			})
		})
	}

	componentDidUpdate(){
		if (this.props.company.company == this.state.company) {
			return
		}
		this.createBarChart();
		getDailyStock(this.props.company.ticker, (err, response) => {
			const rawData = response["Time Series (Daily)"]
			var result = Object.keys(rawData).map(function(key) {
  			return [String(key), rawData[key]];
			})
			const data = []
			for (let i=0;i<31;i++)
				data.push(result[i]);
			let indexNo = this.state.id
			indexNo += 1
			this.setState({
				data: data,
				id: indexNo,
				company: this.props.company.company
			})
		})
	}

	createBarChart() {
      const node = this.node
	  const dataList = []
	  for (let i=0;i<this.state.data.length;i++) {
		  dataList.push(parseInt(this.state.data[i][1]["4. close"]))
	  }
	  console.log(dataList)
      const dataMax = max(dataList)
      const yScale = scaleLinear()
         .domain([0, dataMax])
         .range([0, this.state.size[1]])
   select(node)
      .selectAll('rect')
      .data(dataList)
      .enter()
      .append('rect')

   select(node)
      .selectAll('rect')
      .data(dataList)
      .exit()
      .remove()

   select(node)
      .selectAll('rect')
      .data(dataList)
      .style('fill', '#fe9922')
      .attr('x', (d,i) => i * 25)
      .attr('y', d => this.state.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 25)
   }

	render(){

		return(
			<div key={this.state.id}>
				<svg ref={node => this.node = node}
			    	width={500} height={500}>
			    </svg>
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
