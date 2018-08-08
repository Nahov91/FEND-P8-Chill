import React, { Component } from "react";
import "./App.css";
import logo2 from "./images/logo2.png";
import Map from "./Map.js";
import * as APIs from "./APIs.js";
import Search from "./Search";

export class App extends Component {
  state = {
    locationsArray: [],
    prevLocations: [],
    venueCategoriesArray: []
  };
 
  componentDidMount() {
    APIs.getLocationsAll().then((locationsArray) => {
      /* this.setState({venueCategoriesArray}) */
      this.setState({ locationsArray });
      this.setState({prevLocations:locationsArray});
    });
  }

  refereshLoc = (searchResults, query) => {
    if (query) {
      this.setState((state)=>({
        locationsArray: searchResults
      })) /* if there is a searchquery, then locationsArray will be based on that */
    } else {
      this.setState({ locationsArray: this.state.prevLocations})
    } /* otherwise it will be the previous state */
  }

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
      <div className='main-content'>
        <div className="sidebar">
          <Search id="search" locationsArray={this.state.locationsArray}  onUserDidSearch= {this.refereshLoc}/>
        </div>
        <div className="map-wrapper">
          <Map locationsArray={this.state.locationsArray} venueCategoriesArray={this.state.venueCategoriesArray} isMarkerShown={true}/>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
