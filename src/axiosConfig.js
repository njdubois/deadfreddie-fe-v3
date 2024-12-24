import axios from 'axios';

console.log(process.env.REACT_APP_SERVER_URL);
const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL, // Your API's base URL
  headers: { 'Content-Type': 'multipart/form-data' }, // Default headers for all requests
});

export default instance;