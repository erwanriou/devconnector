import React from 'react'

class NavBar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <div className='mainmenu container'>
          <a href="">DevConnector</a>
          <a href="">Developers</a>
        </div>
        <div className='usermenu container'>
          <a href="">Sign Up</a>
          <a href="">Login</a>
        </div>
      </div>
    )
  }
}

export default NavBar
