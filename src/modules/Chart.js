import React, { Component } from 'react'
import actions from '../actions'
import { connect } from 'react-redux'
import { getDailyStock } from '../utils/getDailyStock'
import ReactFauxDOM from 'react-faux-dom';
import * as d3 from 'd3';

class Chart extends Component {
	constructor(){
        super()
		this.updateDimensions = this.updateDimensions.bind(this),
        this.state = {
			company: "",
			data: [],
			width: 500,
            height: 500,
			id: 0
        }
	}

	componentDidMount(){
		this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
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

	componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

	componentDidUpdate(){
		if (this.props.company.company == this.state.company) {
			return
		}
		this.drawChart();
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

	drawChart() {
        /* here goes the d3 */
		const dataList = []
		for (let i=0;i<this.state.data.length;i++) {
		  dataList.push(parseInt(this.state.data[i][1]["4. close"]))
		}
        //here we set our width and height to be the width and height calculated in the state in updateDimensions()
        let {width, height} = this.state;

        // we create the faux element
        let el = new ReactFauxDOM.Element('div');
        // we set ref on our newly created element
        el.setAttribute("ref", "chart");

        // we attach the width and the height to our svg
        let svg = d3.select(el).append('svg')
                    .attr("width", width)
                    .attr("height", height)

					const dataMax = d3.max(dataList)
			      const yScale = d3.scaleLinear()
			         .domain([0, dataMax])
			         .range([0, height])

		d3.select('svg')
			      .selectAll('rect')
			      .data(dataList)
			      .enter()
			      .append('rect')

			   d3.select('svg')
			      .selectAll('rect')
			      .data(dataList)
			      .exit()
			      .remove()

			   d3.select('svg')
			      .selectAll('rect')
			      .data(dataList)
			      .style('fill', '#fe9922')
			      .attr('x', (d,i) => i * 25)
			      .attr('y', d => height - yScale(d))
			      .attr('height', d => yScale(d))
			      .attr('width', 25)

        // the rest of our chart would go here

        //then we give the result back to react to render it
        return el.toReact();
	}

	updateDimensions() {
		const el = this.refs.chart;
		this.setState({ width: el.offsetWidth, height: el.offsetHeight });
	}


	render(){

		return(
			this.drawChart()
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
