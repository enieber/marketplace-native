import * as types from '../actions/type';
import BaseRouter from '../Router';

const initialState = BaseRouter.router.getStateForAction(BaseRouter.router.getActionForPathAndParams('ProductDetails'));

export default(state = initialState, action) => {
  const nextState = BaseRouter.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
