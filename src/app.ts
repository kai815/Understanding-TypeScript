import axios from 'axios';
const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const API_KEY = process.env.API_KEY;

type GoogleGeocodingReponse = {
  results: {geometry: {location:{lat:number, lng: number}}}[];
  status: 'OK' | 'ZERO_RESULTS'
}

function searchAddressHandler(event:Event){
  event.preventDefault();
  const enteredAddress = addressInput.value
  axios.get<GoogleGeocodingReponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${API_KEY}`).then(response =>{
    if(response.data.status !=="OK") {
      throw new Error('座標を取得できませんでした')
    }
    const coordinates = response.data.results[0].geometry.location
  }).catch(err=>{
    alert(err.message);
    console.log(err)
  })
}

form.addEventListener('submit',searchAddressHandler);