import {
  INCREASE,
  DECREASE,
  GET_ALL_CATEGORIES
} from '../actionTypes';

import {
  getAllCategories as getAllCategoriesApi
} from '../utils/apis';

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

export const getAllCategories = () => async (dispatch) => {
  const categories = await getAllCategoriesApi();

  dispatch({
    type: GET_ALL_CATEGORIES,
    payload: categories
  });
};
