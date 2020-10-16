import axios from 'axios';
const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const API_KEY = process.env.API_KEY;

type GoogleGeocodingReponse = {
  results: {geometry: {location:{lat:number, lng: number}}}[];
  status: 'OK' | 'ZERO_RESULTS'
}
let sc = document.createElement('script')
sc.src=`https://maps.googleapis.com/maps/api/js?key=${API_KEY}`
document.body.appendChild(sc);

function searchAddressHandler(event:Event){
  event.preventDefault();
  const enteredAddress = addressInput.value
  axios.get<GoogleGeocodingReponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${API_KEY}`).then(response =>{
    if(response.data.status !=="OK") {
      throw new Error('座標を取得できませんでした')
    }
    const coordinates = response.data.results[0].geometry.location
    const map = new google.maps.Map(document.getElementById('map')!, {
        center: coordinates,
        zoom: 16,
      });
      new google.maps.Marker({ position: coordinates, map: map });
  }).catch(err=>{
    alert(err.message);
    console.log(err)
  })
}

form.addEventListener('submit',searchAddressHandler);