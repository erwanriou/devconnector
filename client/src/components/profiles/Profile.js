import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { getProfileByHandle } from '../../actions/profileActions'
import ProfileHeader from './ProfileHeader'
import ProfileCreds from './ProfileCreds'
import ProfileAbout from './ProfileAbout'
import ProfileGithub from './ProfileGithub'
import Spinner from '../common/Spinner'

class Profile extends React.Component {
  componentDidMount() {
    const { handle } = this.props.match.params
    handle && this.props.getProfileByHandle(handle)
  }

  render() {
    const { profile, loading } = this.props.profile
    let profileContent

    profile === null || loading
      ? profileContent = <Spinner />
      : profileContent = (
        <Fragment>
          <ProfileHeader profile={profile}/>
          <ProfileAbout />
          <ProfileCreds />
          <ProfileGithub />
        </Fragment>
      )

    return(
      <div className='profile'>
        <div className="bluelign">
          <div className="container submenu">
            <Link to='/profiles' className="goback">
              <i className="fas fa-arrow-left"></i>
              <h4>Go back to Profiles</h4>
            </Link>
            { profile === null || loading
                ? <h6>Loading...</h6>
                : <h6><span>Profile: </span>{profile.user.name}</h6> }
          </div>
        </div>
        {profileContent}
      </div>
    )
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfileByHandle: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  profile: state.profile,
})

export default connect(mapStateToProps, { getProfileByHandle })(Profile)
