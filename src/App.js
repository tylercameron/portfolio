import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';
import "./App.css";
import Header from "./containers/Header/Header";
import Home from "./containers/Home";
import About from "./containers/About";
// import Project from './containers/Project';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <BrowserRouter>
          <Route exact path="/" component={About} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
