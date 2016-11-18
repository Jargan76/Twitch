import React from 'react'
import ReactDOM from 'react-dom'
import AppLayout from './layouts/AppLayout'
import Cover from './components/Cover'
import All from './components/All'
import Online from './components/Online'
import Offline from './components/Offline'
import End from './components/End'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

 ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={AppLayout}>
                <IndexRoute component={Cover} />
                <Route path="/all" component={All} />
                <Route path="/online" component={Online} />
                <Route path="/offline" component={Offline} />
                <Route path="/end" component={End} />
            </Route>
        </Router>
    ), document.getElementById('app'))
