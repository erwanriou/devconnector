import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import TextFieldGroup from '../common/TextFieldGroup'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import { addEducation } from '../../actions/profileActions'

class AddEducation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      school: '',
      degree: '',
      fieldofstudy: '',
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
    const eduData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description,
    }
    this.props.addEducation(
      eduData,
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
    const { errors, school, degree, fieldofstudy, description, from, to, disabled, current } = this.state
    return (
      <div className="addeducation">
        <div className="bluelign">
          <div className="container submenu">
            <Link to='/dashboard' className="goback">
              <i className="fas fa-arrow-left"></i>
              <h4>Go back to Dashboard</h4>
            </Link>
            <h1>Add Education</h1>
          </div>
        </div>
        <div className="content">
          <form
            onSubmit={this.handleSubmit}>
            <h2>Add Any Education and Study you had in the past or current.</h2>
            <TextFieldGroup
              placeholder='School Name'
              title='Required School'
              name='school'
              value={school}
              onChange={this.handleQueryInput}
              error={errors.school}
            />
            <TextFieldGroup
              placeholder='Degree Title'
              title='Required degree'
              name='degree'
              value={degree}
              onChange={this.handleQueryInput}
              error={errors.degree}
            />
            <TextFieldGroup
              placeholder='Field Of Study'
              title='Required Fieldofstudy'
              name='fieldofstudy'
              value={fieldofstudy}
              onChange={this.handleQueryInput}
              error={errors.fieldofstudy}
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
                Current Study
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
              placeholder='Write your Study Description'
              title='Required description'
              name='description'
              value={description}
              onChange={this.handleQueryInput}
              error={errors.description}
            />
            <button
              type='submit'
              className='submitbtn'>
              Add Education
            </button>
          </form>
        </div>
      </div>
    )
  }
}

AddEducation.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  addEducation: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
})

export default withRouter(connect(mapStateToProps, {addEducation})(AddEducation))
