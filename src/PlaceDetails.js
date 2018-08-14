import React from 'react'
import {InfoWindow} from 'react-google-maps'
import { getDetails } from './App'
import Foursquare from './images/icons/powered-by-foursquare-grey.png'

function PlaceDetails(props) {
  let marker = props.marker
  getDetails(props.marker.id)
        .then(data => data)
    /* .then(data => {
      const venueLikes = ((data.likes !==undefined && data.likes.summary) ? data.likes.summary : 'No likes yet') 
      const venueDescription = ((data.description !== undefined && data.description) ? data.description : 'This place must be awesome, but it has no description')
    }) */
console.log(marker.id)
const categoryIconURL = `${marker.categories[0].icon.prefix}bg_32${marker.categories[0].icon.suffix}`
const venueLikes = data.likes.summary
const venueDescription = data.description

  return(
    <InfoWindow>
      <div>
      <h3>{marker.name}</h3>
      <h4>{marker.categories[0].name} </h4>
      <address>{marker.location.address}</address>
      <img src={categoryIconURL} alt={marker.categories[0].name} />
      <p className='description' > {venueDescription} </p>
      <p className='likes'>Likes: {venueLikes} </p> {/* Quota reached, so dummy this time */}
      <img id="poweredBy" src={Foursquare} alt="Powered by Foursquare" />
      </div>
    </InfoWindow>
  )
}

export default PlaceDetails
