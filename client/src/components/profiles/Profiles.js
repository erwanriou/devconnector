import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import Spinner from '../common/Spinner'
import { getProfiles } from '../../actions/profileActions'
import ProfileItem from './ProfileItem'

class Profiles extends React.Component {

  componentDidMount() {
    this.props.getProfiles()
  }
  render() {
    const { profiles, loading } = this.props.profile

    let profileItems
    profiles === null || loading
      ? profileItems = <Spinner />
      : profiles.length > 0
        ? profileItems = profiles.map(profile => (
          <ProfileItem
            key={profile._id}
            profile={profile}
          />
        ))
        : profileItems = <h4>No profiles found...</h4>

    return(
      <div className='profiles'>
        <div className="container">
          <h2>Developer profiles</h2>
          <h3>Browse and connect with developers</h3>
          {profileItems}
        </div>
      </div>
    )
  }
}

Profiles.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired,
}


const mapStateToProps = (state) => ({
  profile: state.profile,
})

export default connect(mapStateToProps, { getProfiles })(Profiles)
