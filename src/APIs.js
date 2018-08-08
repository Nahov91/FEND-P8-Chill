/* Google Maps */
export const MAP_API_KEY =
  "AIzaSyDwcyyo7poh2Jp3dnOEyP9HdRK2CKKcRXQ"; /* Gmaps API key */
/* Foursquare */
export const Client_ID =
  "FN4ROZROVAWIAMXCRJXOKEZHTB43FJINUINZ3XEYVPJAX1LR"; /* Foursquare Client ID */
export const Client_Secret =
  "SFYLU0CI32HUT5BOTO1R4R14SDYLTYJC2ACQYQ210HKAJX0Z"; /* Foursquare scret key */
export const F_api =
  "https://api.foursquare.com/v2"; /* Foursquare API link beginning */

export const getLocationsAll = () =>
  fetch(
    `${F_api}/venues/search?ll=47.1640061,20.1927142&intent=browse&radius=10000&query=park&client_id=${Client_ID}&client_secret=${Client_Secret}&v=20180708`
  )
    .then(res => res.json())
    .then(data => data.response.venues); 


    
    /* fetching the venues details */

 export const getDetails = (venueId) => {
    let detailsURL=[`/venues/${venueId}?`, `client_id=${Client_ID}`, `&client_secret=${Client_Secret}`].join("")


return fetch(`${F_api}${detailsURL}`).then(res=>res.json()).then(data=>data.response.venue)
 }