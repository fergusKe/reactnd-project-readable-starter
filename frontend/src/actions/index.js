import {
  INCREASE,
  DECREASE,
  GET_ALL_CATEGORIES,
  GET_ALL_POSTS,
  GET_CATEGORY_POSTS,
  SET_SORT_TYPE,
  ADD_POST,
  DELETE_POST,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  UPDATE_POST,
  GET_POST_COMMENTS
} from '../actionTypes';

import {
  getAllCategories as getAllCategoriesApi,
  getAllPosts as getAllPostsApi,
  getCategoryPosts as getCategoryPostsApi,
  addPost as addPostApi,
  deletePost as deletePostApi,
  votePost as votePostApi,
  updatePost as updatePostApi,
  getPostComments as getPostCommentsApi
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

export const addPost = post => async (dispatch) => {
  await addPostApi(post);

  dispatch({
    type: ADD_POST,
    payload: post
  });
};

export const deletePost = id => async (dispatch) => {
  await deletePostApi(id);

  dispatch({
    type: DELETE_POST,
    payload: id
  });
};

export const upVotePost = id => async (dispatch) => {
  await votePostApi('upVote', id);

  dispatch({
    type: UP_VOTE_POST,
    payload: id
  });
};

export const downVotePost = id => async (dispatch) => {
  await votePostApi('downVote', id);

  dispatch({
    type: DOWN_VOTE_POST,
    payload: id
  });
};

export const updatePost = (post, id) => async (dispatch) => {
  await updatePostApi(post, id);

  dispatch({
    type: UPDATE_POST,
    payload: {post, id}
  });
};

export const getPostComments = id => async (dispatch) => {
  const comments = await getPostCommentsApi(id);
  console.log('ac id = ', id);
  console.log('ac comments = ', comments);

  dispatch({
    type: GET_POST_COMMENTS,
    payload: comments
  });
};
