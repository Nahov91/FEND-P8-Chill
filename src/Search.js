import React, { Component } from "react";
import escapeRegExp from "escape-string-regexp";

export class Search extends Component {
  state = {
    query: "",
    searchResult: []
  }; /* the query and the result are the states */

  deleteQuery = () => {
    this.setState({ query: "" });
  }; /* deleting the query */
  
  updateQuery = query => {
    this.setState({ query: query });
  }; /* updating the query */

  locationSearch = query => {
    let locationResults;
    let locationsArray = this.props.locationsArray;
    let locationOk = false;
    let result = {};
    if (locationsArray !== undefined) {
      locationOk = true;
    } /* checks wether location is undefined and if not sets locationOk to true */
    if (query) {
      const match = new RegExp(escapeRegExp(query),"i"); /* handling special characters */
      if (locationOk) {
        locationResults = locationsArray.filter(location =>
          match.test(location.name)
        );
      }
    } else {
      locationResults = locationsArray;
    }
    result = { locationOk: locationOk, locationResults: locationResults };
    return result;
  };

  updateText = (query, event) => {
    console.log("query is " + query);
    this.updateQuery(query);
    let result = this.locationSearch(query);
    this.props.onUserDidSearch(result.locationResults, query);
    this.setState({ searchResult: result.locationResults });
  };

  render() {
    let { locationsArray, onUserDidSearch } = this.props;
    let { query, searchResult } = this.state;
    let result = this.locationSearch(query);
    let locationOk = result.locationOk;
    let locationResults = result.locationResults;

    return (
      <div className="search-components" >
        <input
          id="search-field"
          type="text"
          placeholder="Need some Chill? Search here"
          onChange={event => this.updateText(event.target.value, event)}
        />
        {locationOk && (
          <ol className="search-items-list" >
            {locationResults.map((item, index) => (
              <li key={index}>{item.name} </li>
            ))}{" "}
          </ol>
        )}
      </div>
    );
  }
}

export default Search;
