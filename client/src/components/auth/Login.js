import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { loginUser } from '../../actions/authActions'
import TextFieldGroup from '../common/TextFieldGroup'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
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
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const userData = {
      email: this.state.email,
      password: this.state.password,
    }

    this.props.loginUser(userData)
  }

  handleQueryInput(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { email, password, errors } = this.state
    return (
      <div className="container auth">
        <h1>Login</h1>
        <h2>Sign in to your DevConnector account</h2>
        <form onSubmit={this.handleSubmit}>
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
          <button
            type='submit'
            className='submitbtn'>
            Login
          </button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
})

export default withRouter(
  connect(mapStateToProps, { loginUser })(Login)
)
