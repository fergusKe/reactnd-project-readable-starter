import {
  INCREASE,
  DECREASE,
  GET_ALL_CATEGORIES,
  GET_ALL_POSTS,
  GET_CATEGORY_POSTS,
  SET_SORT_TYPE,
  DELETE_POST
} from '../actionTypes';

import {
  getAllCategories as getAllCategoriesApi,
  getAllPosts as getAllPostsApi,
  getCategoryPosts as getCategoryPostsApi,
  deletePost as deletePostApi
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

export const getAllPosts = () => async (dispatch) => {
  const posts = await getAllPostsApi();

  dispatch({
    type: GET_ALL_POSTS,
    payload: posts
  });
};

export const getCategoryPosts = category => async (dispatch) => {
  const posts = await getCategoryPostsApi(category);

  dispatch({
    type: GET_CATEGORY_POSTS,
    payload: posts
  });
};

export const setSortType = sortType => (dispatch) => {
  dispatch({
    type: SET_SORT_TYPE,
    payload: sortType
  });
};

export const deletePost = id => async (dispatch) => {
  await deletePostApi(id);

  dispatch({
    type: DELETE_POST,
    payload: id
  });
};
