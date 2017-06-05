import axios from 'axios';

export const endpoints = {
  products: () => 'product.json',
};

export const base = 'http://enieber.com.br/';

export const getProducts = async () => {
  const endpoint = endpoints.products();
  const url = `${base}${endpoint}`;

  const result = axios.get(url);
  const rez = await result;
  return rez;
};



export default {}
