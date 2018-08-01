import React from 'react'
import Popup from 'reactjs-popup'
import axios from 'axios'
import classnames from 'classnames'
import * as FontAwesome from 'react-icons/fa'

import Card from  './Card'

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

  handleSubmit(e) {
    e.preventDefault()
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    }
    axios.post('/api/users/register', newUser)
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
    const { name, email, password, password2, errors } = this.state

    return (
      <div className="container auth">
        <h1>Sign Up</h1>
        <h2>Create your DevConnector account</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='field'>
            <input
              className={classnames('', {
                'invalid': errors.name
              })}
              type='text'
              name='name'
              value={name}
              onChange={this.handleQueryInput}
              placeholder='Your Name'
            />
            <Popup
              trigger={<FontAwesome.FaQuestionCircle className='questionicon'/>}
              position="right center"
              on="hover">
              <Card title="Required Name" />
            </Popup>
          </div>
          { errors.name && (<p>{errors.name}</p>) }
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
          <div className='field'>
            <input
              className={classnames('', {
                'invalid': errors.password2
              })}
              type='password'
              name='password2'
              value={password2}
              onChange={this.handleQueryInput}
              placeholder='Confirm your password'
            />
          </div>
          { errors.password2 && (<p>{errors.password2}</p>) }
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

export default Register
