import React, { Component } from "react";
import { InfoWindow } from "react-google-maps";
import { getDetails } from "./App";
import Foursquare from "./images/icons/powered-by-foursquare-grey.png";

class PlaceDetails extends Component {
  state = {
    infoDetails: {},
    likes: "",
    description: "",
    bestPhoto: ""
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
      const bestPhotoURL =
        "${data.bestPhoto.prefix}300x300{data.bestPhoto.suffix}";

      this.setState({
        infoDetails: data,
        likes: venueLikes,
        description: venueDescription,
        bestPhoto: bestPhotoURL
      });
    });

    return (
      <InfoWindow>
        <div className="infowindow">
          <div className="image-wrapper">
            <img className="best-photo" src={this.state.bestPhoto} alt={marker.name} />
            <h3 className="venue-name" >{marker.name}</h3>
          </div>
          <div className="details">
            <img className="category-image" src={categoryIconURL} alt={marker.categories[0].name} />
            <h4 className="venue-category">{marker.categories[0].name} </h4>
            <address className="venue-location">
              {marker.location.address}
            </address>
          </div>
          <p className="description"> {this.state.description} </p>
          <p className="likes">{this.state.likes} </p>
          <img id="powered-by" src={Foursquare} alt="Powered by Foursquare" />
        </div>
      </InfoWindow>
    );
  }
}

export default PlaceDetails;
