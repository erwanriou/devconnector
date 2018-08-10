import React, { Fragment } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Spinner from '../common/Spinner'
import { getProfiles } from '../../actions/profileActions'

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
          profile.handle
        ))
        : profileItems = <h4>No profiles found...</h4>

    return(
      <div className='profile'>
        <div className="container">
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
