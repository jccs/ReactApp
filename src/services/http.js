import axios from 'axios';

const api = process.env.REACT_APP_API;

const token = JSON.parse(localStorage.getItem('user')).token;
const options = {
  headers: {
    'x-access-token': token,
  },
};

const get = (url) => {
  return axios.get(`${api}${url}`, options);
};

const post = (url, data) => {
  return axios.post(`${api}${url}`, data, options);
};

const remove = (url, data) => {
  return axios.delete(`${api}${url}`, { data }, options);
};

export { get, post, remove };
