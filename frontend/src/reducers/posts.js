import {
  GET_ALL_POSTS,
  GET_CATEGORY_POSTS,
  DELETE_POST
} from '../actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_POSTS:
      return [...payload];
    case GET_CATEGORY_POSTS:
      return [...payload];
    case DELETE_POST: {
      const posts = state.filter(post => (
        post.id !== payload
      ));
      return posts;
    }
    default:
      return state;
  }
};
