import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Banner from './components/Banner/Banner';
import About from "./containers/About/About";
import Projects from './containers/Projects/Projects';
import projects from './data/projects';

class App extends Component {
  render() {
    let allProjects = null;

    if (projects.length > 1) {
      allProjects = <Projects projects={projects} />
    };
    return (
      <div className="App">
        <Header />
        <Banner />
        <About />
        {allProjects}
      </div>
    );
  }
}

export default App;
