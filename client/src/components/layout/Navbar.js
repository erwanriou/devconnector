import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <div className='mainmenu container'>
          <Link to='/'>DevConnector</Link>
          <Link to='/profile'>Developers</Link>
        </div>
        <div className='usermenu container'>
          <Link to='/register'>Sign Up</Link>
          <Link to='/login'>Login</Link>
        </div>
      </div>
    )
  }
}

export default NavBar
