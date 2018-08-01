import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import TextFieldGroup from '../common/TextFieldGroup'

//Redux import
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'

class Register extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    }
    this.handleQueryInput = this.handleQueryInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
    this.setState({ errors: this.props.errors });
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    }
    this.props.registerUser(
      newUser,
      this.props.history
    )
  }

  handleQueryInput(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { name, email, password, password2, errors } = this.state
    return (
      <div className="container auth">
        <h1>Sign Up</h1>
        <h2>Create your DevConnector account</h2>
        <form onSubmit={this.handleSubmit}>
          <TextFieldGroup
            placeholder='Your name'
            title='Required Name'
            name='name'
            value={name}
            onChange={this.handleQueryInput}
            error={errors.name}
          />
          <TextFieldGroup
            placeholder='Your Email'
            title='Required Email'
            name='email'
            type='email'
            value={email}
            onChange={this.handleQueryInput}
            error={errors.email}
          />
          <TextFieldGroup
            placeholder='Your password'
            title='Required Password'
            name='password'
            type='password'
            value={password}
            onChange={this.handleQueryInput}
            error={errors.password}
          />
          <TextFieldGroup
            placeholder='Confirm your password'
            title='Confirm Password'
            name='password2'
            type='password'
            value={password2}
            onChange={this.handleQueryInput}
            error={errors.password2}
          />
          <button
            type='submit'
            className='submitbtn'>
            Create your account
          </button>
        </form>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
})

export default withRouter(
  connect(mapStateToProps, { registerUser })(Register)
)
