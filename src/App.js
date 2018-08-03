import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import Map from "./Map";
import logo2 from "./images/logo2.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <a href="#" id="menu">
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="#fff" stroke-width="5" />
              <path d="M0,14 30,14" stroke="#fff" stroke-width="5" />
              <path d="M0,23 30,23" stroke="#fff" stroke-width="5" />
            </svg>
          </a>
          <img id="logo" src={logo2} alt="home" />
        </header>
      </div>
    );
  }
}

export default App;
