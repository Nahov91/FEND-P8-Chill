import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import PlaceMarker from './PlaceMarker'

class Map extends Component {

constructor(props){
  super(props);
}


  render() {
    const ChillMap = withGoogleMap(props => (
      <GoogleMap 
        center= {{lat: 47.1640061, lng:20.1927142}} 
        defaultZoom= {14} >
          {this.props.searchResults.map((marker)=>(
        <PlaceMarker 
        key={marker.id} 
        marker={marker} />
          ))}
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