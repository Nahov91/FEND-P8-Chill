import React, { Component } from "react";
import "./App.css";
import logo2 from "./images/logo2.png";
import Map from "./Map";
export class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="header">
          <a href="#" id="menu">
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="#fff" strokeWidth="5" />
              <path d="M0,14 30,14" stroke="#fff" strokeWidth="5" />
              <path d="M0,23 30,23" stroke="#fff" strokeWidth="5" />
            </svg>
          </a>
          <img id="logo" src={logo2} alt="home" />
        </header>
        <div className="main-content">
          <div className="sidebar" />
          <div className="map-wrapper">
            <Map />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
