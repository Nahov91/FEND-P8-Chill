import React, { Component } from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


class Search extends Component {
/*   constructor(props) {
    super(props);
  } */

  handleClick(event, key) {
    this.props.onHandleClick(event, key);
  }

  render() {
    let searchResults = this.props.searchResults;
    /* let locationsArray = this.props.locationsArray; */

    /* Returning a list based on the searchResults */
    return (
      <div id="search-components">
        <ol className="search-items-list">
        <ReactCSSTransitionGroup 
        transitionName="fade" 
        transitionEnterTimeout={200} 
        transitionLeaveTimeout={200} >
          {searchResults.map(location => (
            <li 
            key={location.id} 
            id={location.id}
            onClick={(event, key) => this.handleClick(event, location.id)} >
              {location.name} 
              <br/>{location.location.address}
            </li>
          ))}
          </ReactCSSTransitionGroup>
        </ol>
      </div>
    );
  }
}
export default Search;
