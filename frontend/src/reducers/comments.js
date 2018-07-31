import {
  GET_POST_COMMENTS
} from '../actionTypes';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POST_COMMENTS:
      console.log('payload = ', payload);
      return payload;
    default:
      return state;
  }
};
