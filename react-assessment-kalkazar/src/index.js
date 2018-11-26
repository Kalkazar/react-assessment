import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './index.css'

import Layout from './hoc/Layout/Layout'
import Home from './containers/Home/Home'
import About from './containers/About/About'
import Resume from './containers/Resume/Resume'
import Portfolio from './containers/Portfolio/Portfolio'
import Contact from './containers/Contact/Contact'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Layout>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/resume' component={Resume} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </Layout>
    </Router>,
    document.getElementById('root')
)

serviceWorker.unregister();
