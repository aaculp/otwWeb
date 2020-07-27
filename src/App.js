import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Food from "./components/Food";
import Bar from "./components/Bar";
import Parking from "./components/Parking";
import Restaurants from "./components/Restaurants";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/food" component={Food} />
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/bars" component={Bar} />
            <Route path="/parking" component={Parking} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
