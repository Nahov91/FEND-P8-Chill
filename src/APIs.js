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

  /* Venue categories */

  export const aquarium = "4fceea171983d5d06c3e9823"
  export const art_gallery = "4bf58dd8d48988d1e2931735"
  export const cafe = "4bf58dd8d48988d16d941735"
  export const campground ="4bf58dd8d48988d1e4941735"
  export const library ="4bf58dd8d48988d12f941735"
  export const museum = "4bf58dd8d48988d181941735"
  export const park = "4bf58dd8d48988d163941735"
  export const spa = "4bf58dd8d48988d1ed941735"
  export const zoo = "4bf58dd8d48988d17b941735"

export const getLocationsAll = () =>
  fetch(
    `${F_api}/venues/search?ll=47.1640061,20.1927142&intent=browse&radius=10000&limit=20&categoryId=${aquarium},${art_gallery},${cafe},${campground},${library},${museum},${park},${spa},${zoo}&client_id=${Client_ID}&client_secret=${Client_Secret}&v=20180708`
  )
    .then(res => res.json())
    .then(data => data.response.venues); 


    
    /* fetching the venues details */

 export const getDetails = (venueId) => {
    let detailsURL=[`/venues/${venueId}?`, `client_id=${Client_ID}`, `&client_secret=${Client_Secret}`].join("")


return fetch(`${F_api}${detailsURL}`).then(res=>res.json()).then(data=>data.response.venue)
 }