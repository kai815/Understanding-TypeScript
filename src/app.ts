import axios from 'axios';
const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const API_KEY = process.env.API_KEY;

function searchAddressHandler(event:Event){
  event.preventDefault();
  const enteredAddress = addressInput.value
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${API_KEY}`).then(response =>{
    console.log(response)
  }).catch(err=>{
    alert(err.message);
    console.log(err)
  })
}

form.addEventListener('submit',searchAddressHandler);