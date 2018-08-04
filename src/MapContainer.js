import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import PropTypes from 'prop-types';


export class MapContainer extends Component {
  render() {
    return (
      <Map id='map' google={this.props.google} zoom={14} initialCenter={{
        lat: 47.4725185,
        lng: 18.866602
      }} onClick={this.onMapClicked}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDwcyyo7poh2Jp3dnOEyP9HdRK2CKKcRXQ")
})(MapContainer)