import React, { Component } from 'react'
import { Marker } from 'react-google-maps'
import MyMarkerIcon from './images/markers/park.png'

export class Marker extends Component {
  render() {
    return (
        <Marker>
            position= {this.props.location}
        </Marker>
    )
  }
}

export default Marker
