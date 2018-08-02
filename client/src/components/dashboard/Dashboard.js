import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCurrentProfile } from '../../actions/profileActions'
import Spinner from '../common/Spinner'

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getCurrentProfile()
  }

  render() {
    const { user } = this.props.auth
    const { profile, loading } = this.props.profile

    let dashboardContent

    profile === null || loading
      ? dashboardContent = <Spinner />
      : Object.keys(profile).length > 0
        ? dashboardContent = <h4>TODO: DISPLAY PROFILE</h4>
        : dashboardContent = (
          <div>
            <h2>Welcome { user.name }</h2>
            <p>You have not yet setup your profile, please add some info.</p>
            <Link
              to='/create-profile'
              className='btn'>Create your Profile</Link>
          </div>
        )



    return (
      <div className="dashboard container">
        <h1>Dashboard</h1>
        {dashboardContent}
      </div>
    )
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
