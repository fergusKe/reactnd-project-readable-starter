import {
  INCREASE,
  DECREASE,
} from '../actionTypes';

export const increate = () => (dispatch) => {
  dispatch({
    type: INCREASE
  });
};

export const decreate = () => (dispatch) => {
  dispatch({
    type: DECREASE
  });
};
