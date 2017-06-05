import axios from 'axios';

export const endpoints = {
  users: () => 'product.json',
};

export const base = 'http://enieber.com.br/';

export const users = async () => {
  const endpoint = endpoints.users();
  const url = `${base}${endpoint}`;

  const headers = {
    contentType: 'application/json',
  };
  const options = {
    method: 'GET',
    headers
  };

  const result = axios.get(url);
  const rez = await result;
  return rez;
};



export default {}
