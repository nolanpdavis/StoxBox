import React, { Component } from 'react'
import {StockBox} from '.'

export default class Stocklist extends Component {
	constructor(){
        super()
        this.state = {
        }
}

	render(){

        const list =

        [
            {ticker: "AAPL", company: "Apple Inc."},
            {ticker: "ABBV", company: "AbbVie Inc."},
            {ticker: "ABT", company: "Abbott Laboratories"},
            {ticker: "ACN", company: "Accenture"},
            {ticker: "AGN", company: "Allergan"},
            {ticker: "AIG", company: "American International Group"},
            {ticker: "ALL", company: "Allstate"},
            {ticker: "AMGN", company: "Amgen"},
            {ticker: "AMZN", company: "Amazon"},
            {ticker: "AXP", company: "American Express"},
            {ticker: "BA", company: "Boeing"},
            {ticker: "BAC", company: "Bank of America"},
            {ticker: "BIIB", company: "Biogen"},
            {ticker: "BK", company: "The Bank of New York Mellon"},
            {ticker: "BLK", company: "BlackRock"},
            {ticker: "BMY", company: "Bristol-Myers Squibb"},
            {ticker: "BRK.B", company: "Berkshire Hathaway"},
            {ticker: "C", company: "Citigroup"},
            {ticker: "CAT", company: "Caterpillar Inc."},
            {ticker: "CELG", company: "Celgene"},
            {ticker: "CHTR", company: "Charter Communications"},
            {ticker: "CL", company: "Colgate-Palmolive"},
            {ticker: "CMCSA", company: "Comcast"},
            {ticker: "COF", company: "Capital One"},
            {ticker: "COP", company: "ConocoPhillips"},
            {ticker: "COST", company: "Costco"},
            {ticker: "CSCO", company: "Cisco Systems"},
            {ticker: "CVS", company: "CVS Health"},
            {ticker: "CVX", company: "Chevron"},
            {ticker: "DHR", company: "Danaher"},
            {ticker: "DIS", company: "The Walt Disney Company"},
            {ticker: "DUK", company: "Duke Energy"},
            {ticker: "DWDP", company: "DowDuPont"},
            {ticker: "EMR", company: "Emerson Electric"},
            {ticker: "EXC", company: "Exelon"},
            {ticker: "F", company: "Ford Motor"},
            {ticker: "FB", company: "Facebook"},
            {ticker: "FDX", company: "FedEx"},
            {ticker: "FOX", company: "21st Century Fox"},
            {ticker: "GD", company: "General Dynamics"},
            {ticker: "GE", company: "General Electric"},
            {ticker: "GILD", company: "Gilead Sciences"},
            {ticker: "GM", company: "General Motors"},
            {ticker: "GOOG", company: "Alphabet Inc."},
            {ticker: "GS", company: "Goldman Sachs"},
            {ticker: "HAL", company: "Halliburton"},
            {ticker: "HD", company: "Home Depot"},
            {ticker: "HON", company: "Honeywell"},
            {ticker: "IBM", company: "International Business Machines"},
            {ticker: "INTC", company: "Intel Corporation"},
            {ticker: "JNJ", company: "Johnson & Johnson"},
            {ticker: "JPM", company: "JPMorgan Chase"},
            {ticker: "KHC", company: "Kraft Heinz"},
            {ticker: "KMI", company: "Kinder Morgan"},
            {ticker: "KO", company: "The Coca-Cola Company"},
            {ticker: "LLY", company: "Eli Lilly and Company"},
            {ticker: "LMT", company: "Lockheed-Martin"},
            {ticker: "LOW", company: "Lowe's"},
            {ticker: "MA", company: "MasterCard"},
            {ticker: "MCD", company: "McDonald's"},
            {ticker: "MDLZ", company: "Mondelēz International"},
            {ticker: "MDT", company: "Medtronic"},
            {ticker: "MET", company: "Metlife"},
            {ticker: "MMM", company: "3M Company"},
            {ticker: "MO", company: "Altria Group"},
            {ticker: "MON", company: "Monsanto"},
            {ticker: "MRK", company: "Merck & Co."},
            {ticker: "MS", company: "Morgan Stanley"},
            {ticker: "MSFT", company: "Microsoft"},
            {ticker: "NEE", company: "NextEra Energy"},
            {ticker: "NKE", company: "Nike, Inc."},
            {ticker: "ORCL", company: "Oracle Corporation"},
            {ticker: "OXY", company: "Occidental Petroleum"},
            {ticker: "PCLN", company: "The Priceline Group"},
            {ticker: "PEP", company: "PepsiCo"},
            {ticker: "PFE", company: "Pfizer"},
            {ticker: "PG", company: "Procter & Gamble"},
            {ticker: "PM", company: "Philip Morris International"},
            {ticker: "PYPL", company: "PayPal"},
            {ticker: "QCOM", company: "Qualcomm"},
            {ticker: "RTN", company: "Raytheon"},
            {ticker: "SBUX", company: "Starbucks"},
            {ticker: "SLB", company: "Schlumberger"},
            {ticker: "SO", company: "Southern Company"},
            {ticker: "SPG", company: "Simon Property Group"},
            {ticker: "T", company: "AT&T"},
            {ticker: "TGT", company: "Target Corporation"},
            {ticker: "TWX", company: "Time Warner"},
            {ticker: "TXN", company: "Texas Instruments"},
            {ticker: "UNH", company: "UnitedHealth Group"},
            {ticker: "UNP", company: "Union Pacific Railroad"},
            {ticker: "UPS", company: "United Parcel Service"},
            {ticker: "USB", company: "U.S. Bancorp"},
            {ticker: "UTX", company: "United Technologies"},
            {ticker: "V", company: "Visa Inc."},
            {ticker: "VZ", company: "Verizon Communications"},
            {ticker: "WBA", company: "Walgreens Boots Alliance"},
            {ticker: "WFC", company: "Wells Fargo"},
            {ticker: "WMT", company: "Walmart"},
            {ticker: "XOM", company: "ExxonMobil"}
        ]

		return(
			<div className="stocksContainer">
				{list.map((stock, i) => {
					return (
						<StockBox key={i} stock={stock} />
					)
				})}
			</div>
		)
	}
}
