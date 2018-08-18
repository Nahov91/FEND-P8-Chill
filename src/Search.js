import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Search extends Component {

  handleClick(event, key) {
    this.props.onHandleClick(event, key);
  }

  render() {
    let searchResults = this.props.searchResults;

    /* Returning a list based on the searchResults */
    return (
      <div id="search-components">
        <ol className="search-items-list">
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            {searchResults.map(location => (
              <li
                key={location.id}
                id={location.id}
                onKeyPress={(event, key) =>
                  this.handleClick(event, location.id)
                }
                onClick={(event, key) => this.handleClick(event, location.id)}
                tabIndex="0"
              >
                <h2>{location.name}</h2>
                <br /> <address>{location.location.address}</address>
              </li>
            ))}
          </ReactCSSTransitionGroup>
        </ol>
      </div>
    );
  }
}
export default Search;
