import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-animesonline-cc.herokuapp.com'
});