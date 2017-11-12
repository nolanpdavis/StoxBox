
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
import { Dashboard } from './pages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
require('../styles/main.css')

export default class App extends Component {

    render(){
        return(

            <Provider store={ store.configureStore() }>
                <div id="root">
                    <Dashboard />
                </div>
            </Provider>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
