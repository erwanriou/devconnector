import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import TextFieldGroup from '../common/TextFieldGroup'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import SelectListGroup from '../common/SelectListGroup'
import InputGroup from '../common/InputGroup'

class CreateProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displaySocialInputs: false,
      handle: '',
      company: '',
      website:'',
      location: '',
      status: '',
      skills: '',
      githubusername: '',
      bio: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      instagram: '',
      errors: {},
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault()
    const newProfile = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    }
    // this.props.registerProfile(
    //   newProfile,
    //   this.props.history
    // )
  }

  render() {
    const { errors, company } = this.state
    return (
      <div className="createprofile container">
        <h1>Create your Profile</h1>
        <h2>Let's get some informations to make your profile stand out!</h2>
        <form onSubmit={this.handleSubmit}>
          <TextFieldGroup
            placeholder='Your company'
            title='Required company'
            name='company'
            value={company}
            onChange={this.handleQueryInput}
            error={errors.company}
          />
          <button
            type='submit'
            className='submitbtn'>
            Create your profile
          </button>
        </form>
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
