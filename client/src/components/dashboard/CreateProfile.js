import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import TextFieldGroup from '../common/TextFieldGroup'

class CreateProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displaySocialInputs: false,
      handle: '',
      company: '',
      website:'',
      location: ''
      status: '',
      skills: '',
      githubusername: '',
      bio: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      instagram: ''
      errors: {},
    }
  }
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
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
})

export default connect(mapStateToProps)(CreateProfile)
