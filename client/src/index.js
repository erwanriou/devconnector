import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import reducer from './reducers'
import middleware from './middleware'

const store = createStore(reducer, composeWithDevTools(middleware));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
