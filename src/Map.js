import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


export class Map extends Component {
  render() {
    let markersArray =[]
    let {locationsArray} = this.props
    let locationOk = false
    
    if(locationsArray!==undefined&&locationsArray!==null&&locationsArray.length>0) locationOk = true
    if (locationOk) {
        let marker= {}      
    locationsArray.map((loc) => {
      marker= { 
        lat: loc.location.lat,
        lng: loc.location.lng,
        title: loc.name,
        venueId: loc.id}
        
        markersArray.push(marker)
    })
  }
    const ChillMap = withGoogleMap(props => (
      <GoogleMap 
        isMarkerShown={true}  
        center= {{lat: 47.1640061, lng:20.1927142}} 
        defaultZoom= {14} >
          {markersArray.map((marker, index)=>(
          <Marker key={index} title= {marker.title} position={{lat: marker.lat, lng: marker.lng}} />
          ))}
      </GoogleMap>
    ));
    return (
      <div>
        <ChillMap
          markers={markersArray} 
          containerElement={ <div style={{ height: `100vh`, width: `100vw` }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    )
  }
};

export default Map
