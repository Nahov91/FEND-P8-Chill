import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

export class Map extends Component {
  render() {

    const ChillMap = withGoogleMap(props => (
      <GoogleMap defaultCenter= {{lat: 47.1640061, lng:20.1927142}} defaultZoom= {14} >
      </GoogleMap>
    ))
    return (
      <div>
        <ChillMap
          containerElement={ <div style={{ height: `100vh`, width: `100vw` }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    )
  }
};

export default Map
