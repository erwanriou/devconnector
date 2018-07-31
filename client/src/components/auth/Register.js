import React from 'react'
import Popup from "reactjs-popup"
import * as FontAwesome from 'react-icons/fa'

const Card = ({ title }) => (
  <div className="card">
    <div className="header">{title}</div>
    { title === 'Required Name' &&
       <div className="content">
          Your First and Last name together. This field is required
       </div> }
    { title === 'Required Email' &&
      <div className="content">
        This site uses Gravatar so if you want a profile image, use a Gravatar email
      </div> }
    { title === 'Required Password' &&
      <div className="content">
        The password should include upper-case and lower-case letters and one or more numerical digits. It should be at least 6 caraters lenght
      </div> }
  </div>
)

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
    console.log(newUser);
  }

  handleQueryInput(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { name, email, password, password2 } = this.state
    return (
      <div className="container register">
        <h1>Sign Up</h1>
        <h2>Create your DevConnector account</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='field'>
            <input
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
          <div className='field'>
            <input
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
          <div className='field'>
            <input
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
          <div className='field'>
            <input
              type='password'
              name='password2'
              value={password2}
              onChange={this.handleQueryInput}
              placeholder='Confirm your password'
            />
          </div>
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
