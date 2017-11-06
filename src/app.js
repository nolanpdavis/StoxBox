
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Dashboard, Recover, Administration, Settings, Logout, Organizations, UsersAndRoles, Broadcast} from './pages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
require('../styles/main.css')

export default class App extends Component {

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/recover" component={Recover} />
                    <Route path="/logout" component={Logout} />
                </Switch>
            </BrowserRouter>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
