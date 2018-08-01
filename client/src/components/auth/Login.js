import React from 'react'
import Popup from 'reactjs-popup'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withRouter } from 'react-router-dom'
import * as FontAwesome from 'react-icons/fa'

import { connect } from 'react-redux'
import { loginUser } from '../../actions/authActions'
import Card from  './Card'


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

  componentDidUpdate(prevProps) {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      this.props.history.push("/dashboard");
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
          <div className='field'>
            <input
              className={classnames('', {
                'invalid': errors.email
              })}
              type='email'
              name='email'
              value={email}
              onChange={this.handleQueryInput}
              placeholder='Your Email'
            />
            <Popup
              trigger={<FontAwesome.FaQuestionCircle className='questionicon'/>}
              position="right center"
              on="hover">
              <Card title="Required Email" />
            </Popup>
          </div>
          { errors.email && (<p>{errors.email}</p>) }
          <div className='field'>
            <input
              className={classnames('', {
                'invalid': errors.password
              })}
              type='password'
              name='password'
              value={password}
              onChange={this.handleQueryInput}
              placeholder='Your password'
            />
            <Popup
              trigger={<FontAwesome.FaQuestionCircle className='questionicon'/>}
              position="right center"
              on="hover">
              <Card title="Required Password" />
            </Popup>
          </div>
          { errors.password && (<p>{errors.password}</p>) }
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
