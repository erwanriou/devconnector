import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import { connect } from 'react-redux'
import { loginUser } from '../actions/authActions'

import NavBar from './layout/Navbar'
import Landing from './layout/Landing'
import Register from './auth/Register'
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
        <Footer />
      </Fragment>
    )
  }
}

export default App
