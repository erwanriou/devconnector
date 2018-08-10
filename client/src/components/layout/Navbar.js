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
      <div className='usermenu'>
        <Link
          to='/dashboard'>
          Dashboard
        </Link>
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
      <div className='usermenu'>
        <Link to='/register'>Sign Up</Link>
        <Link to='/login'>Login</Link>
      </div>
    )

    return (
      <div className='navbar'>
        <div className="container innavbar">
          <div className='mainmenu'>
            <Link to='/'>DevConnector</Link>
            <Link to='/profiles'>Developers</Link>
          </div>
          { isAuthenticated
              ? authLinks
              : guestLinks }
        </div>
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
