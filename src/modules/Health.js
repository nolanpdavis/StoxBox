
import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router-dom'

export default class Health extends Component {
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
			<div className={(this.state.displayIsOpen) ? "healthWidget widgetHalf" : "widgetHalf healthWidgetClosed"}>
                <div className="fixedHeader">
                    <h2>Health</h2>
						{(this.state.displayIsOpen) ?
							<i className="fa fa-caret-down fa-2x" aria-hidden="true" onClick={this.handleClick.bind(this)}></i> :
							<i className="fa fa-caret-right fa-2x" aria-hidden="true" onClick={this.handleClick.bind(this)}></i>}
                    {(this.state.displayIsOpen) ? <hr className="healthHR healthHR2"/> : null}
                </div>
				{(this.state.displayIsOpen) ?
					<div className="healthContent">
	                    <i className="fa fa-desktop fa-2x" aria-hidden="true"></i>
	                    <h3>nate-vr agent</h3>
	                    <p className="offlineBG floatRight">Offline 5 Days, 13 Hours</p>
	                    <p className="indent">Beta - APARAVI/Nate/Nate-server appliance</p>
	                    <p className="floatRight moveUp">10 Tasks with errors</p>
	                    <hr className="healthHR"/>
	                    <i className="fa fa-desktop fa-2x" aria-hidden="true"></i>
	                    <h3>Jack's Machine (Q4J)</h3>
	                    <p className="offlineBG floatRight">Offline 34 Days, 17 Hours</p>
	                    <p className="indent">Beta - APARAVI/NovaStor/Production/AG-HyperV12 appliance</p>
	                    <p className="floatRight moveUp">0 Tasks with errors</p>
	                    <hr className="healthHR"/>
	                    <i className="fa fa-desktop fa-2x" aria-hidden="true"></i>
	                    <h3>ag-backupserver agent</h3>
	                    <p className="offlineBG floatRight">Offline 5 Days, 13 Hours</p>
	                    <p className="indent">Beta - APARAVI/NovaStor/Production/AG-HyperV12 appliance</p>
	                    <p className="floatRight moveUp">10 Tasks with errors</p>
	                    <hr className="healthHR"/>
	                    <i className="fa fa-desktop fa-2x" aria-hidden="true"></i>
	                    <h3>ag-ws-kurt agent</h3>
	                    <p className="offlineBG floatRight">Offline 34 Days, 19 Hours</p>
	                    <p className="indent">Beta - APARAVI/NovaStor/Production/AG-HyperV12 appliance</p>
	                    <p className="floatRight moveUp">0 Tasks with errors</p>
	                    <hr className="healthHR"/>
	                    <i className="fa fa-desktop fa-2x" aria-hidden="true"></i>
	                    <h3>nate-tablet agent</h3>
	                    <p className="offlineBG floatRight">Offline 56 Days, 4 Hours</p>
	                    <p className="indent">Beta - APARAVI/Nate/Nate-server appliance</p>
	                    <p className="floatRight moveUp">0 Tasks with errors</p>
	                    <hr className="healthHR"/>
	                    <i className="fa fa-desktop fa-2x" aria-hidden="true"></i>
	                    <h3>Jack's Machine (Q4J)</h3>
	                    <p className="offlineBG floatRight">Offline 34 Days, 17 Hours</p>
	                    <p className="indent">Beta - APARAVI/NovaStor/Production/AG-HyperV12 appliance</p>
	                    <p className="floatRight moveUp">0 Tasks with errors</p>
	                    <hr className="healthHR"/>
	                    <i className="fa fa-desktop fa-2x" aria-hidden="true"></i>
	                    <h3>ag-backupserver agent</h3>
	                    <p className="offlineBG floatRight">Offline 5 Days, 13 Hours</p>
	                    <p className="indent">Beta - APARAVI/NovaStor/Production/AG-HyperV12 appliance</p>
	                    <p className="floatRight moveUp">10 Tasks with errors</p>
	                    <hr className="healthHR"/>
	                    <i className="fa fa-desktop fa-2x" aria-hidden="true"></i>
	                    <h3>ag-ws-kurt agent</h3>
	                    <p className="offlineBG floatRight">Offline 34 Days, 19 Hours</p>
	                    <p className="indent">Beta - APARAVI/NovaStor/Production/AG-HyperV12 appliance</p>
	                    <p className="floatRight moveUp">0 Tasks with errors</p>
	                    <hr className="healthHR"/>
	                    <i className="fa fa-desktop fa-2x" aria-hidden="true"></i>
	                    <h3>nate-tablet agent</h3>
	                    <p className="offlineBG floatRight">Offline 56 Days, 4 Hours</p>
	                    <p className="indent">Beta - APARAVI/Nate/Nate-server appliance</p>
	                    <p className="floatRight moveUp">0 Tasks with errors</p>
	                </div>
					:
					null}

			</div>
		)
	}
}
