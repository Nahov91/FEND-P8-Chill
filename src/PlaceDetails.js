import React, { Component } from "react";
import { InfoWindow } from "react-google-maps";
import { getDetails } from "./App";
import Foursquare from "./images/icons/powered-by-foursquare-grey.png";

class PlaceDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoDetails: {},
      likes: "",
      description: "",
      bestPhoto: ""
    };
  }

  /* if component is mounted we do the fetching of details data */
  componentDidMount() {
    getDetails(this.props.marker.id).then(data => {
      const venueLikes = data.likes.summary;
      const venueDescription = data.description;
      /* assembling the bestPhoto url */
      const bestPhotoURL = `${data.bestPhoto.prefix}300x300${
        data.bestPhoto.suffix
      }`;

      this.setState({
        infoDetails: data,
        likes: venueLikes,
        description: venueDescription,
        bestPhoto: bestPhotoURL
      });
    });
  }

  render() {
    const props = this.props;
    let marker = props.marker;

    /* assembling the category icon url */
    const categoryIconURL = `${marker.categories[0].icon.prefix}bg_32${
      marker.categories[0].icon.suffix
    }`;

    return (
      <InfoWindow>
        <div
          className="infowindow"
          tabIndex="0"
          aria-label={`details of ${marker.name}`}
        >
          <div className="image-wrapper">
            <div className="best-photo">
              <figure>
                <img src={this.state.bestPhoto} alt={marker.name} />
              </figure>
            </div>
            <h3 className="venue-name">{marker.name}</h3>
          </div>
          <div className="details">
            <img
              className="category-image"
              src={categoryIconURL}
              alt={`${marker.categories[0].name} category icon`}
            />
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
