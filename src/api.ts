// api.ts
import axios from 'axios';

// Your credentials (username and password)
const username = 'coalition'; // Replace with your username
const password = 'skills-test'; // Replace with your password

// Encode the credentials to base64
const auth = btoa(`${username}:${password}`);

// Create an instance of Axios with the base URL and authorization header
const api = axios.create({
  baseURL: 'https://fedskillstest.coalitiontechnologies.workers.dev',
  headers: {
    'Authorization': `Basic ${auth}` // Use Basic Auth
  },
});

export default api;
