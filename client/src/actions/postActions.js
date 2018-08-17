import axios from 'axios'
import { POST_LOADING, GET_POSTS, GET_POST, ADD_POST, LIKE_POST, DELETE_POST, GET_ERRORS } from './types'

export const addPost = (postData)  => dispatch => {
  axios
    .post('/api/posts', postData)
    .then(res => dispatch({
        type: ADD_POST,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    )
}

export const addComment = (postId, commentData)  => dispatch => {
  axios
    .post(`/api/posts/comment/${postId}`, commentData)
    .then(res => dispatch({
        type: GET_POST,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    )
}


export const likePost = (id)  => dispatch => {
  axios
    .post(`/api/posts/like/${id}`, id)
    .then(res => dispatch({
      type: LIKE_POST,
      payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    )
}

export const getPosts = ()  => dispatch => {
  dispatch(setPostLoading())
  axios
    .get('/api/posts')
    .then(res => dispatch({
        type: GET_POSTS,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null,
      })
    )
}

export const getPost = (id)  => dispatch => {
  dispatch(setPostLoading())
  axios
    .get(`/api/posts/${id}`, id)
    .then(res => dispatch({
        type: GET_POST,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: null,
      })
    )
}

export const deletePost = (id) => dispatch => {
  axios
    .delete(`/api/posts/${id}`, id)
    .then(res =>
      dispatch({
        type: DELETE_POST,
        payload: id,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    )
}

export const setPostLoading = () => {
  return {
    type: POST_LOADING,
  }
}
