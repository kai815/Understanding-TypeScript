const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const API_KEY = process.env.API_KEY;

function searchAddressHandler(event:Event){
  event.preventDefault();
  // const enteredAddress = addressInput.value
}

form.addEventListener('submit',searchAddressHandler);