import {
  GET_ALL_CATEGORIES
} from '../actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_CATEGORIES:
      return payload;
    default:
      return state;
  }
};
