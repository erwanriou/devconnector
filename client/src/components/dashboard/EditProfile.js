import React, { Fragment } from 'react'
import { PropTypes } from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import TextFieldGroup from '../common/TextFieldGroup'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import SelectListGroup from '../common/SelectListGroup'
import InputGroup from '../common/InputGroup'
import { createProfile, getCurrentProfile } from '../../actions/profileActions'
import isEmpty from '../../validation/is-empty'

const ObjectMapper = (sourceType, destinationType) => {
  const destinationTypeOutput = {}
  Object.entries(sourceType).forEach(([key, value]) => {
    if (destinationType.hasOwnProperty(key)) {
      if (value) {
        destinationTypeOutput[key] = value;
      }
    }
  })
  return destinationTypeOutput;
}

class EditProfile extends React.Component {
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
    this.handleQueryInput = this.handleQueryInput.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.fillProfileState = this.fillProfileState.bind(this)
  }
  componentDidMount() {
    const { profile: { profile }} = this.props;
    if (!isEmpty(profile)) {
     this.fillProfileState(profile)
    }
    this.props.getCurrentProfile()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
    this.setState({ errors: this.props.errors });
    }
  }

  fillProfileState = profile => {
    const { skills, social } = profile;
    const skillsToFill = skills ? skills.join() : ''
    const socialsToFill = social ? ObjectMapper(social, this.state) : {}
    const profileToFill = {
      ...ObjectMapper(profile, this.state),
      ...socialsToFill,
      skills: skillsToFill
    }
    const hasSocialLink = Object.keys(socialsToFill).length > 0;
    this.setState({
      ...this.state,
      ...profileToFill,
      displaySocialInputs: hasSocialLink,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram,
    }
    this.props.createProfile(
      profileData,
      this.props.history
    )
  }

  handleQueryInput(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleToggle() {
    this.setState({
      displaySocialInputs: !this.state.displaySocialInputs
    })
  }

  render() {
    const {
      errors, handle, status, company, location, website, skills, githubusername,
      bio, displaySocialInputs, twitter, linkedin, facebook, instagram, youtube
    } = this.state
    const options = [
      { label: '* Select Professional Status', value: 0 },
      { label: 'Junior Developer', value: 'Junior Developer' },
      { label: 'Senior Developer', value: 'Senior Developer' },
      { label: 'Manager', value: 'Manager' },
      { label: 'Student or Learning', value: 'Student or Learning' },
      { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
      { label: 'Intern', value: 'Intern' },
      { label: 'Other', value: 'Other' },
    ]
    let socialInputs = (
      <Fragment>
        <InputGroup
          placeholder='Twitter account URL'
          name='twitter'
          value={twitter}
          icons='fab fa-twitter'
          onChange={this.handleQueryInput}
          error={errors.twitter}
        />
        <InputGroup
          placeholder='facebook account URL'
          name='facebook'
          value={facebook}
          icons='fab fa-facebook'
          onChange={this.handleQueryInput}
          error={errors.facebook}
        />
        <InputGroup
          placeholder='Linkedin account URL'
          name='linkedin'
          value={linkedin}
          icons='fab fa-linkedin'
          onChange={this.handleQueryInput}
          error={errors.linkedin}
        />
        <InputGroup
          placeholder='YouTube account URL'
          name='youtube'
          value={youtube}
          icons='fab fa-youtube'
          onChange={this.handleQueryInput}
          error={errors.youtube}
        />
        <InputGroup
          placeholder='Instagram account'
          name='instagram'
          value={instagram}
          icons='fab fa-instagram'
          onChange={this.handleQueryInput}
          error={errors.instagram}
        />
      </Fragment>
    )

    return (
      <div className="createprofile container">
        <div className="bluelign">
          <div className="container submenu">
            <Link to='/dashboard' className="goback">
              <i className="fas fa-arrow-left"></i>
              <h4>Go back to Dashboard</h4>
            </Link>
            <h1>Edit your Profile</h1>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <h2>Make sure your profile is always up to date!</h2>
          <div className="flexcolumn">
            <TextFieldGroup
              placeholder='* Profile handle'
              title='Required handle'
              name='handle'
              value={handle}
              onChange={this.handleQueryInput}
              error={errors.handle}
            />
            <SelectListGroup
              placeholder='* Status'
              name='status'
              value={status}
              onChange={this.handleQueryInput}
              options={options}
              error={errors.status}
            />
          </div>
          <div className="flexcolumn">
            <TextFieldGroup
              placeholder='Company'
              title='Required Company'
              name='company'
              value={company}
              onChange={this.handleQueryInput}
              error={errors.company}
            />
            <TextFieldGroup
              placeholder='Website'
              title='Required Website'
              name='website'
              value={website}
              onChange={this.handleQueryInput}
              error={errors.website}
            />
          </div>
          <div className="flexcolumn">
            <TextFieldGroup
              placeholder='Skills'
              title='Required Skills'
              name='skills'
              value={skills}
              onChange={this.handleQueryInput}
              error={errors.skills}
            />
            <TextFieldGroup
              placeholder='Github Username'
              title='Required githubusername'
              name='githubusername'
              value={githubusername}
              onChange={this.handleQueryInput}
              error={errors.githubusername}
            />
          </div>
          <div className="flexcolumn">
            <TextFieldGroup
              placeholder='Location'
              title='Required Location'
              name='location'
              value={location}
              onChange={this.handleQueryInput}
              error={errors.location}
            />
          </div>
          <div className="flexcolumn">
            <TextAreaFieldGroup
              placeholder='Write your Bio'
              title='Required bio'
              name='bio'
              value={bio}
              onChange={this.handleQueryInput}
              error={errors.bio}
            />
          </div>
          <div
            className='flexlign'
            onClick={this.handleToggle}>
            <h6>Add Social Network Links</h6>
            <i className="fas fa-arrow-right"></i>
          </div>
          { displaySocialInputs
            ? socialInputs
            : null }
          <div className="flexcolumn">
            <button
              type='submit'
              className='submitbtn'>
              Save your profile
            </button>
          </div>
        </form>
      </div>
    )
  }
}

EditProfile.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
  errors: state.errors,
})

export default withRouter(connect(mapStateToProps, { createProfile, getCurrentProfile })(EditProfile))
