import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

//redux
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'
import { clearCurrentProfile } from '../../actions/profileActions'
class NavBar extends React.Component {

  handleLogout(e) {
    e.preventDefault()
    this.props.clearCurrentProfile()
    this.props.logoutUser()
  }
  render() {
    const  { isAuthenticated, user } = this.props.auth

    const authLinks = (
      <div className='usermenu container'>
        <img
          src={user.avatar}
          alt={user.name}
          style={{ width: '25px', marginRight: '5px'}}
          title='You must have a Gravatar connect to you email to display an image'
        />
        <Link
          to='/'
          onClick={this.handleLogout.bind(this)}>
          Logout
        </Link>
      </div>
    )

    const guestLinks = (
      <div className='usermenu container'>
        <Link to='/register'>Sign Up</Link>
        <Link to='/login'>Login</Link>
      </div>
    )

    return (
      <div className='navbar'>
        <div className='mainmenu container'>
          <Link to='/'>DevConnector</Link>
          <Link to='/profile'>Developers</Link>
        </div>
        { isAuthenticated
            ? authLinks
            : guestLinks }
      </div>
    )
  }
}

NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default withRouter(connect(mapStateToProps, { logoutUser, clearCurrentProfile })(NavBar))
