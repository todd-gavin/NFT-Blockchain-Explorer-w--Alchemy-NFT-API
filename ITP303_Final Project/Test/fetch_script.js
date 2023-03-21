console.log("...logging 1.1...");

// alchemy-nft-api/fetch-script.js
import fetch from 'node-fetch';

console.log("...logging 1...");

console.log("...logging 2...");

// Setup request options:
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

console.log("...logging 3...");

// Replace with your Alchemy API key:
const apiKey = "demo";
const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}/getNFTs/`;
// Replace with the wallet address you want to query:
const ownerAddr = "0xF5FFF32CF83A1A614e15F25Ce55B0c0A6b5F8F2c";
const fetchURL = `${baseURL}?owner=${ownerAddr}`;

console.log("...logging 4...");

// Make the request and print the formatted response:
fetch(fetchURL, requestOptions)
  .then(response => response.json())
  .then(response => JSON.stringify(response, null, 2))
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

console.log("...logging 5...");

//https://www.youtube.com/watch?v=cuEtnrL9-H0&t=43s