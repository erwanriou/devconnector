import React from 'react'
import Popup from 'reactjs-popup'
import axios from 'axios'
import classnames from 'classnames'
import * as FontAwesome from 'react-icons/fa'

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

  handleSubmit(e) {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    axios.post('/api/users/login', user)
      .then(res => console.log(res.data))
      .catch(err => this.setState({
        errors: err.response.data
      }))
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

export default Login
