import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import TextFieldGroup from '../common/TextFieldGroup'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import { addExperience } from '../../actions/profileActions'

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
    this.handleCheckBox = this.handleCheckBox.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
    this.setState({ errors: this.props.errors });
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description,
    }
    this.props.addExperience(
      expData,
      this.props.history
    )
  }

  handleCheckBox(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current,
    })
  }

  handleQueryInput(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { errors, company, title, location, description, from, to, disabled, current } = this.state
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
          <form
            onSubmit={this.handleSubmit}>
            <h2>Add Any job experience you had in the past or current.</h2>
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
            <div className="field">
              <h6>From Date</h6>
              <TextFieldGroup
                name='from'
                type='date'
                value={from}
                onChange={this.handleQueryInput}
                error={errors.from}
              />
            </div>
            <div className="field">
              <h6>To Date</h6>
              <TextFieldGroup
                name='to'
                type='date'
                value={to}
                onChange={this.handleQueryInput}
                disabled={disabled ? 'disabled' : '' }
                error={errors.to}
              />
            </div>
            <div className='checkcontainer'>
              <label htmlFor="current">
                Current Job
              </label>
              <input
                className='checkbox'
                type="checkbox"
                name='current'
                id='current'
                value={current}
                checked={current}
                onChange={this.handleCheckBox}
              />
            </div>
            <TextAreaFieldGroup
              placeholder='Write your Job Description'
              title='Required description'
              name='description'
              value={description}
              onChange={this.handleQueryInput}
              error={errors.description}
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
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  addExperience: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
})

export default withRouter(connect(mapStateToProps, {addExperience})(AddExperience))
