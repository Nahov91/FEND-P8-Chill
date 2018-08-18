import React, { Component } from "react";
import "./App.css";
import logo2 from "./images/logo2.png";
import Map from "./Map.js";
import Search from "./Search";
import escapeRegExp from "escape-string-regexp";

/******* Variables for API *******/

export const F_api =
  "https://api.foursquare.com/v2/venues"; /* Foursquare API link beginning */
export const Client_ID =
  "FN4ROZROVAWIAMXCRJXOKEZHTB43FJINUINZ3XEYVPJAX1LR"; /* Foursquare Client ID */
export const Client_Secret =
  "SFYLU0CI32HUT5BOTO1R4R14SDYLTYJC2ACQYQ210HKAJX0Z"; /* Foursquare scret key */

/****** Venue categories ******/

export const aquarium = "4fceea171983d5d06c3e9823";
export const art_gallery = "4bf58dd8d48988d1e2931735";
export const cafe = "4bf58dd8d48988d16d941735";
export const campground = "4bf58dd8d48988d1e4941735";
export const library = "4bf58dd8d48988d12f941735";
export const museum = "4bf58dd8d48988d181941735";
export const park = "4bf58dd8d48988d163941735";
export const spa = "4bf58dd8d48988d1ed941735";
export const zoo = "4bf58dd8d48988d17b941735";

/*** Actual fetching likes data from Foursquare ***/

export const getDetails = id => {
  let detailsUrl = `/${id}?&client_id=${Client_ID}&client_secret=${Client_Secret}&v=20180708`;
  return fetch(`${F_api}${detailsUrl}`)
    .then(res => res.json())
    .then(data => data.response.venue)
    .catch(error =>
      alert(
        "Uh-oh! We can't connect to Foursquare to get chill places info for you. Try again in a few seconds! 🐼"
      )
    );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationsArray: [],
      query: "",
      detailsArray: [],
      selectedMarker: ""
    };

    this.onHandleClick = this.onHandleClick.bind(this);
  }

  componentDidMount() {
    /* When the component is mounted we fetch the search data from FourSquare */
    /* If there is an error it gives the user an alert */
    fetch(
      `${F_api}/search?ll=47.1745722,20.1946597&intent=browse&radius=10000&limit=20&categoryId=${aquarium},${art_gallery},${cafe},${campground},${library},${museum},${park},${spa},${zoo}&client_id=${Client_ID}&client_secret=${Client_Secret}&v=20180708`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          locationsArray: data.response.venues
        })
      )
      .catch(error =>
        alert(
          "Uh-oh! We can't connect to Foursquare to get chill places for you. Try again in a few seconds! 🐼"
        )
      );
  }

  /* Updates the query to whatever user types in */
  updateQuery(query) {
    this.setState({ query: query });
  }

  /* Handling click event on list items */
  onHandleClick(event, key) {
    let selectedMarker = this.state.locationsArray.filter(
      loc => loc.id === key
    );
    this.setState({ selectedMarker: selectedMarker });
  }

  render() {
    let searchResults;
    /* Checking if the locations are not undefined */
    if (this.state.locationsArray !== undefined) {
      if (this.state.query) {
        const match = new RegExp(escapeRegExp(this.state.query), "i");
        searchResults = this.state.locationsArray.filter(location =>
          match.test(location.name)
        );
      } else {
        searchResults = this.state.locationsArray;
      }
    }

    return (
      <div className="App">
        <header id="header">
          <figure id="logo">
            <a href="/">
              <img src={logo2} alt="Chill app" />
            </a>
          </figure>
        </header>
        <main className="main-content">
          <section className="sidebar">
            <input
              aria-label="Search"
              id="search-field"
              type="text"
              placeholder="Need some Chill? Search here"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
            <Search
              locationsArray={this.state.locationsArray}
              searchResults={searchResults}
              onHandleClick={this.onHandleClick}
            />
          </section>
          <section className="map-wrapper" tabIndex="0">
            <Map
              locationsArray={this.state.locationsArray}
              isMarkerShown={true}
              onMarkerClick={this.toggleInfoWindow}
              searchResults={searchResults}
              onHandleClick={this.onHandleClick}
              selectedMarker={this.state.selectedMarker}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
