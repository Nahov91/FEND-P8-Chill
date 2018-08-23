import React, { Component } from "react";
import PropTypes from "prop-types";
import { Marker } from "react-google-maps";
import PlaceDetails from "./PlaceDetails";
import Markericon from "./images/markers/x64/park.png";

export default class PlaceMarker extends Component {
  static propTypes = {
    infoWindowOpen: PropTypes.bool,
    marker: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      bounce: "",
      infoWindowOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  /* Handling the click event with a toggle like behaviour
On click InfoWindow opens or closes based on the boolean */
  handleClick(event, key) {
    let infoWindowOpen = this.state.infoWindowOpen;
    this.setState({ infoWindowOpen: !infoWindowOpen });
  }

  render() {
    let marker = this.props.marker;
    let infoWindowOpen = this.state.infoWindowOpen;
    let selectedMarker = this.props.selectedMarker;

    /* bounce is responsible for animating marker on list item click */
    if (selectedMarker && infoWindowOpen === false)
      selectedMarker.map(m => {
        if (m.id === this.props.id)
          this.setState({
            infoWindowOpen: !infoWindowOpen,
            bounce: 3
          });
      });

    return (
      <Marker
        key={marker.title}
        position={{ lat: marker.location.lat, lng: marker.location.lng }}
        onClick={(event, key) => this.handleClick(event, this.props.marker.id)}
        icon={Markericon}
        animation={this.state.bounce}
      >
        <React.Fragment>
          {this.state.infoWindowOpen === true && (
            <PlaceDetails marker={marker} />
          )}
        </React.Fragment>
      </Marker>
    );
  }
}
