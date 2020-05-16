import axios from 'axios';

const token = '8519576a40bf886b0bfa28c1a5c2ae4bf675c1b0';

export default axios.create({
  baseURL: 'https://api.todoist.com/rest/v1/',
  headers: {
    Authorization: 'Bearer ' + token,
    'Content-Type': 'application/json',
  },
});
