import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'

import authReducer from './authReducer'
import errorReducer from './errorReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  loadingBar: loadingBarReducer,
})
