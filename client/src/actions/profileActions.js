import axios from 'axios'
import { GET_PROFIL, PROFIL_LOADING, CLEAR_CURRENT_PROFIL, GET_ERRORS, } from './types'

export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading())
  axios
    .get('/api/profile')
    .then(res =>
      dispatch({
        type: GET_PROFIL,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFIL,
        payload: {},
      })
    )
}

export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('api/profile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    )
}

export const setProfileLoading = () => {
  return {
    type: PROFIL_LOADING,
  }
}

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFIL,
  }
}
