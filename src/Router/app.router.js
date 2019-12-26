import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../Scene/Home-Scene/home.scene';

class AppRoute extends Component {
    render() {
        return (
            <Router>
                <Route path='/' component={Home} />
                <Route path='/book' component={Home} />
            </Router>
        );
    }
}

export default AppRoute;