import React, { Component } from "react";

class Search extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let searchResults = this.props.searchResults
    let locationsArray = this.props.locationsArray

    /* Returning a list based on the searchResults */
    return (
        <div id="search-components" >
          <ol className="search-items-list" >
            {searchResults.map(location => (
              <li key={location.id}>{location.name} </li>
            ))}
          </ol>
          </div>
        );
  }
}
export default Search
