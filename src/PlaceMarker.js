import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Marker} from 'react-google-maps' 
import PlaceDetails from './PlaceDetails'

export default class PlaceMarker extends Component {
  static propTypes = {
    infoWindowOpen: PropTypes.bool,
    marker: PropTypes.object,
  }

  constructor(props){
      super(props);
  
    this.state= {
      infoWindowOpen: false
  }
}


/* Handling the click event with a toggle like behaviour
On click InfoWindow opens or closes based on the boolean */
handleClick(event, key) {
    let markerClick = event
    let infoWindowOpen= this.state.infoWindowOpen
    this.setState({infoWindowOpen:!infoWindowOpen})
}

  render() {
    let marker= this.props.marker

    return (
      <Marker key={marker.title} position={{lat: marker.location.lat, lng: marker.location.lng}}
      onClick={(event) => this.handleClick(event, marker.title)} >
      <React.Fragment>
          {this.state.infoWindowOpen===true&&(
      <PlaceDetails marker={marker} />
          )}
      </React.Fragment>
      </Marker>
    )
  }
}
