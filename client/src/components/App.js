import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './common/PrivateRoute'

import NavBar from './layout/Navbar'
import Landing from './layout/Landing'
import Register from './auth/Register'
import Dashboard from './dashboard/Dashboard'
import Login from './auth/Login'
import Footer from './layout/Footer'

import '../styles/reset.css'
import '../styles/style.css'

class App extends React.Component {

  render() {
    return (
      <Fragment>
        <NavBar />
        <Route exact path='/' component={Landing}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <Switch>
          <PrivateRoute exact path='/dashboard' component={Dashboard}/>
        </Switch>
        <Footer />
      </Fragment>
    )
  }
}

export default App
