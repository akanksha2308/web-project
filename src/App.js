import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Scene/Home-Scene/home.scene';

import {CarImage} from './Config/image.config';

class App extends Component {
  render() {
    return (
      // <div>
      //   <Router>
      //     <Route path="/home" exact component={Home} />
      //     {/* <Route path="/about/" component={About} />
      //   <Route path="/users/" component={Users} /> */}
      //   </Router>
      // </div>
      <div>
        <img src={CarImage()} style={{ width: '100%', height: '400%' }} alt="Car" />
      </div>
    );
  }
}

export default App;