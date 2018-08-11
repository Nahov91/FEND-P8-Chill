import React, { Component } from 'react'
import {InfoWindow} from 'react-google-maps'

function PlaceDetails(props) {
  return(
    <InfoWindow>
      <div>
      <h3>{props.marker.name}</h3>
      <p>This is some information, that you want to see</p>
      <p>And here will be some pictures as well</p>
      </div>
    </InfoWindow>
  )
}

export default PlaceDetails
