import {
  GET_ALL_POSTS,
  GET_CATEGORY_POSTS,
  ADD_POST
} from '../actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_POSTS:
      console.log('posts = ', payload);
      return payload;
    case GET_CATEGORY_POSTS:
      console.log('posts = ', payload);
      return payload;
    case ADD_POST:
      return {payload, ...state};
    default:
      return state;
  }
};
