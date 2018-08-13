import React from 'react'
import {InfoWindow} from 'react-google-maps'
import { F_api, Client_ID, Client_Secret, getDetails } from './App'
import Foursquare from './images/icons/powered-by-foursquare-grey.png'

function PlaceDetails(props) {
  let marker = props.marker
  getDetails(props.marker.id)
    .then(data => {
      if(data!==undefined){
      let likes = ((data.likes !==undefined && data.likes.summary) ? data.likes.summary : 'No likes yet') 
      let description = ((data.description !== undefined && data.description) ? data.description : 'This place must be awesome, but it has no description')
    }})
console.log(marker.id)
  return(
    <InfoWindow>
      <div>
      <h3>{marker.name}</h3>
      <h4>{marker.categories[0].name} </h4>
      <address>{marker.location.address}</address>
      <p className='description' > description </p>
      <p className='likes'>Likes: likes </p> {/* Quota reached, so dummy this time */}
      <img id="poweredBy" src={Foursquare} alt="Powered by Foursquare" />
      </div>
    </InfoWindow>
  )
}

export default PlaceDetails
