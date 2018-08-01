import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import jwt_decode from 'jwt-decode'

import setAuthToken from './utils/setAuthToken'
import { setCurrentUser } from './actions/authActions'

import rooReducer from './reducers'
import middleware from './middleware'

//Check for token

const store = createStore(rooReducer, composeWithDevTools(middleware))

if (localStorage.jwtToken) {
  const localToken = localStorage.jwtToken
  setAuthToken(localToken)
  const decoded = jwt_decode(localToken)
  store.dispatch(setCurrentUser(decoded))
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
