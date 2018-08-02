import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCurrentProfile } from '../../actions/profileActions'
import Spinner from '../common/Spinner'

class CreateProfile extends React.Component {

  render() {
    return (
      <div className="createprofile container">
        Create Profile
      </div>
    )
  }
}

CreateProfile.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
})

export default connect(mapStateToProps, { getCurrentProfile })(CreateProfile)
