import {
  INCREASE,
  DECREASE
} from '../actionTypes';

const initialState = 0;

export default (state = initialState, {type}) => {
  switch (type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};
