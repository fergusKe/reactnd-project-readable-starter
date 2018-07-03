import {
  SET_SORT_TYPE
} from '../actionTypes';

const initialState = 'Newest';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SORT_TYPE:
      return payload;
    default:
      return state;
  }
};
