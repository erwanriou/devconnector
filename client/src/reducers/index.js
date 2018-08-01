import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'

import authReducer from './authReducer'
import errorReducer from './errorReducer'
import profileReducer from './profileReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  loadingBar: loadingBarReducer,
})
