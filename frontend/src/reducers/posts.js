import {
  GET_ALL_POSTS
} from '../actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_POSTS:
      return payload;
    default:
      return state;
  }
};
