import React, { Component } from "react";

export default class MapErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log('gMapsError: ', error);
    
  }

  render() {
    if (this.state.hasError) {
      return (
        <div id="mapError">
          <h1>Something went wrong</h1>
          <h4>
            Unfortunately the map can't be loaded. Please check back in a few
            minutes. 🐼
          </h4>
        </div>
      );
    }
    return this.props.children;
  }
}
