import React, { Component } from "react";
import "./App.css";
import logo2 from "./images/logo2.png";
import Map from "./Map.js";
import Search from "./Search";
import escapeRegExp from 'escape-string-regexp'

export const F_api =
  "https://api.foursquare.com/v2"; /* Foursquare API link beginning */
export const Client_ID =
  "FN4ROZROVAWIAMXCRJXOKEZHTB43FJINUINZ3XEYVPJAX1LR"; /* Foursquare Client ID */
export const Client_Secret =
  "SFYLU0CI32HUT5BOTO1R4R14SDYLTYJC2ACQYQ210HKAJX0Z"; /* Foursquare scret key */

/* Venue categories */

export const aquarium = "4fceea171983d5d06c3e9823";
export const art_gallery = "4bf58dd8d48988d1e2931735";
export const cafe = "4bf58dd8d48988d16d941735";
export const campground = "4bf58dd8d48988d1e4941735";
export const library = "4bf58dd8d48988d12f941735";
export const museum = "4bf58dd8d48988d181941735";
export const park = "4bf58dd8d48988d163941735";
export const spa = "4bf58dd8d48988d1ed941735";
export const zoo = "4bf58dd8d48988d17b941735";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationsArray: [],
      query: ""
    };
  }
  componentDidMount() {
    fetch(
      `${F_api}/venues/search?ll=47.1640061,20.1927142&intent=browse&radius=10000&limit=20&categoryId=${aquarium},${art_gallery},${cafe},${campground},${library},${museum},${park},${spa},${zoo}&client_id=${Client_ID}&client_secret=${Client_Secret}&v=20180708`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          locationsArray: data.response.venues
        }))
        .catch(error=> console.log("error = ",error))
  }

  updateQuery(query) {
    this.setState({ query: query })
  }

  render() {
    let searchResults
    if (this.state.locationsArray!==undefined) {
      if (this.state.query) {
        const match = new RegExp(escapeRegExp(this.state.query), 'i')
        searchResults = this.state.locationsArray.filter(location =>
          match.test(location.name))
        } else {
          searchResults = this.state.locationsArray;
        }
      }

    return (
      <div className="App">
        <header id="header">
          <a href="" id="menu">
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="#fff" strokeWidth="5" />
              <path d="M0,14 30,14" stroke="#fff" strokeWidth="5" />
              <path d="M0,23 30,23" stroke="#fff" strokeWidth="5" />
            </svg>
          </a>
          <img id="logo" src={logo2} alt="home" />
        </header>
        <div className="main-content">
          <div className="sidebar">
            <input
              id="search-field"
              type="text"
              placeholder="Need some Chill? Search here"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
            <Search
              locationsArray={this.state.locationsArray}
              searchResults={searchResults}
            />
          </div>
          <div className="map-wrapper">
            <Map
              locationsArray={this.state.locationsArray}
              isMarkerShown={true}
              onMarkerClick={this.toggleInfoWindow}
              searchResults={searchResults}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
