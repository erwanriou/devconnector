import React, { Fragment } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import TextFieldGroup from '../common/TextFieldGroup'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'

class AddExperience extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      company: '',
      title: '',
      location: '',
      from: '',
      to: '',
      description: '',
      current: false,
      disabled: false,
      errors: {},
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleQueryInput = this.handleQueryInput.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    // const newExperience = {
    //   handle: this.state.handle,
    //   location: this.state.location,
    //
    // }
    // this.props.AddExperience(
    //   newExperience,
    //   this.props.history
    // )
  }

  handleQueryInput(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { errors, company, title, location, from, to, disabled } = this.state
    const { user } = this.props.auth
    const { profile, loading } = this.props.profile
    return (
      <div className="addexperience">
        <div className="bluelign">
          <div className="container submenu">
            <Link to='/dashboard' className="goback">
              <i className="fas fa-arrow-left"></i>
              <h4>Go back to Dashboard</h4>
            </Link>
            <h1>Add Experience</h1>
          </div>
        </div>
        <div className="content">
          <h2>Add Any job experience you had in the past or current.</h2>
          <form
            onSubmit={this.handleSubmit}
            className="container">
            <TextFieldGroup
              placeholder='Company Name'
              title='Required Company'
              name='company'
              value={company}
              onChange={this.handleQueryInput}
              error={errors.company}
            />
            <TextFieldGroup
              placeholder='Job Title'
              title='Required Title'
              name='title'
              value={title}
              onChange={this.handleQueryInput}
              error={errors.title}
            />
            <TextFieldGroup
              placeholder='Location'
              title='Required Location'
              name='location'
              value={location}
              onChange={this.handleQueryInput}
              error={errors.location}
            />
            <h6>From Date</h6>
            <TextFieldGroup
              name='from'
              type='date'
              value={from}
              onChange={this.handleQueryInput}
              error={errors.from}
            />
            <h6>To Date</h6>
            <TextFieldGroup
              name='from'
              type='date'
              value={from}
              onChange={this.handleQueryInput}
              disabled={disabled ? 'disabled' : '' }
              error={errors.from}
            />
            <button
              type='submit'
              className='submitbtn'>
              Add Experience
            </button>
          </form>
        </div>

      </div>
    )
  }
}

AddExperience.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
  errors: state.errors,
})

export default withRouter(connect(mapStateToProps)(AddExperience))
