import * as types from './type';

export const addProduct = (product) => {
  return {
    type: types.addProduct,
    product
  }
} 