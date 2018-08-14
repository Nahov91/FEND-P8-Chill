import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import PlaceMarker from './PlaceMarker'

class Map extends Component {

constructor(props){
  super(props);
}

  render() {
    console.log(this.props.selectedMarker)
    let selectedMarker = this.props.selectedMarker
    /* Creating Gmaps with its default required props */
    const ChillMap = withGoogleMap(props => (
      <GoogleMap 
        center= {{lat: 47.1745722, lng:20.1946597}} 
        defaultZoom= {14} >
         {/* Mapping over the search results to create marker(s)  */}
          {this.props.searchResults.map((marker)=>(
        <PlaceMarker 
        key={marker.id} 
        marker={marker}
        id={marker.id}
        selectedMarker={selectedMarker} />
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