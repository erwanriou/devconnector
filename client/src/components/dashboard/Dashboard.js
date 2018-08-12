import React, { Fragment } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCurrentProfile, deleteAccount } from '../../actions/profileActions'
import Spinner from '../common/Spinner'
import ProfileAction from './ProfileAction'
import Experience from './Experience'
import Education from './Education'

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getCurrentProfile()
  }

  handleDelete(e) {
    this.props.deleteAccount()
  }

  render() {
    const { user } = this.props.auth
    const { profile, loading } = this.props.profile

    let dashboardContent

    profile === null || loading
      ? dashboardContent = <Spinner />
      : Object.keys(profile).length > 0
        ? dashboardContent = (
          <Fragment>
            <div className='bluelign'>
              <div className="container profilemenu">
                <ProfileAction />
                <h3>Welcome <Link to={`/profiles/${profile.handle}`}>{ user.name }</Link></h3>
              </div>
            </div>
            <div className="container margintop">
              <Experience experience={profile.experience}/>
              <Education education={profile.education}/>
              <div className="delete">
                <button
                  className='deletebtn'
                  onClick={this.handleDelete.bind(this)}>
                  <i className="fas fa-eraser"></i>
                  <h4>Delete your profile</h4>
                </button>
              </div>
            </div>
          </Fragment>
        )
        : dashboardContent = (
          <div>
            <h1>Dashboard</h1>
            <h2>Welcome { user.name }</h2>
            <p>You have not yet setup your profile, please add some info.</p>
            <Link
              to='/create-profile'
              className='btn'>Create your Profile</Link>
          </div>
        )
    return (
      <div className="dashboard">
        {dashboardContent}
      </div>
    )
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard)
