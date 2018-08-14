import React, { Component } from "react";
import { InfoWindow } from "react-google-maps";
import { getDetails } from "./App";
import Foursquare from "./images/icons/powered-by-foursquare-grey.png";

class PlaceDetails extends Component {
  state = {
    infoDetails: {},
    likes: "",
    description: ""
  };

  render() {
    const props = this.props;
    let marker = props.marker;

    const categoryIconURL = `${marker.categories[0].icon.prefix}bg_32${
      marker.categories[0].icon.suffix
    }`;
    console.log(marker.id);

    getDetails(props.marker.id).then(data => {
      const venueLikes = data.likes.summary;
      const venueDescription = data.description;

      this.setState({
        infoDetails: data,
        likes: venueLikes,
        description: venueDescription
      });
    });

    return (
      <InfoWindow>
        <div>
          <h3>{marker.name}</h3>
          <h4>{marker.categories[0].name} </h4>
          <address>{marker.location.address}</address>
          <img src={categoryIconURL} alt={marker.categories[0].name} />
          <p className="description"> {this.state.description} </p>
          <p className="likes">Likes: {this.state.likes} </p>{" "}
          {/* Quota reached, so dummy this time */}
          <img id="poweredBy" src={Foursquare} alt="Powered by Foursquare" />
        </div>
      </InfoWindow>
    );
  }
}

export default PlaceDetails;
