import React, { Component } from 'react'
import {InfoWindow} from 'react-google-maps'

function PlaceDetails(props) {
  let marker = props.marker


  return(
    <InfoWindow>
      <div>
      <h3>{marker.name}</h3>
      <h4>{marker.categories[0].name} </h4>
      <address>{marker.location.address}</address>
      </div>
    </InfoWindow>
  )
}

export default PlaceDetails
