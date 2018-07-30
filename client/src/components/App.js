import React, { Fragment } from 'react'

import NavBar from './layout/Navbar'
import Landing from './layout/Landing'
import Footer from './layout/Footer'

import '../styles/reset.css'
import '../styles/style.css'

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Landing />
        <Footer />
      </Fragment>
    )
  }
}

export default App
