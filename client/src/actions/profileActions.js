import axios from 'axios'
import { GET_PROFIL, PROFIL_LOADING, CLEAR_CURRENT_PROFIL } from './types'

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
