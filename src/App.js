import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import About from "./components/About";
import Saved from "./components/Saved";
import Search from "./components/Search";
import NotFound from './components/404'
class App extends Component {
  render() {
    return (
        <Router>
          <Navigation />
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/about" component={About} />
            <Route exact path="/404" component={NotFound} />
        </Router>
    );
  }
}

export default App;