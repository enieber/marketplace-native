import * as types from '../actions/type';

export default(state = [], payload) => {
  switch(payload.type) {
  
    case types.addProduct:
      return [...state, payload.product]
    default:
      return state;
  }
}
