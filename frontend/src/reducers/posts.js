import {
  GET_ALL_POSTS,
  GET_CATEGORY_POSTS,
  ADD_POST,
  DELETE_POST,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  UPDATE_POST
} from '../actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_POSTS:
      return [...payload];
    case GET_CATEGORY_POSTS:
      return [...payload];
    case ADD_POST:
      return {payload, ...state};
    case DELETE_POST: {
      const posts = state.filter(post => (
        post.id !== payload
      ));
      return [...posts];
    }
    case UP_VOTE_POST: {
      const post = state.map((p) => {
        if (p.id === payload) {
          return {
            ...p,
            voteScore: p.voteScore + 1
          };
        }
        return p;
      });

      return post;
    }
    case DOWN_VOTE_POST: {
      const post = state.map((p) => {
        if (p.id === payload) {
          return {
            ...p,
            voteScore: p.voteScore - 1
          };
        }
        return p;
      });

      return post;
    }
    case UPDATE_POST: {
      const post = state.map((p) => {
        if (p.id === payload.id) {
          return {
            ...payload.post
          };
        }
        return p;
      });

      return post;
    }
    default:
      return state;
  }
};
