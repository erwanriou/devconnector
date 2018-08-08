import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './common/PrivateRoute'

import NavBar from './layout/Navbar'
import Landing from './layout/Landing'
import Register from './auth/Register'
import CreateProfile from './dashboard/CreateProfile'
import EditProfile from './dashboard/EditProfile'
import Dashboard from './dashboard/Dashboard'
import AddExperience from './dashboard/AddExperience'
import Login from './auth/Login'
import Footer from './layout/Footer'

import '../styles/reset.css'
import '../styles/style.css'
import '../styles/auth.css'
import '../styles/form.css'
import '../styles/dashboard.css'

class App extends React.Component {

  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/login' component={Login}/>
          <PrivateRoute exact path='/dashboard' component={Dashboard}/>
          <PrivateRoute exact path='/create-profile' component={CreateProfile}/>
          <PrivateRoute exact path='/edit-profile' component={EditProfile}/>
          <PrivateRoute exact path='/add-experience' component={AddExperience}/>
        </Switch>
        <Footer />
      </Fragment>
    )
  }
}

export default App
