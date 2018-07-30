import React from 'react'
import * as FontAwesome from 'react-icons/fa'


class Register extends React.Component {
  render() {
    return (
      <div className="container register">
        <h1>Sign Up</h1>
        <h2>Create your DevConnector account</h2>


        <form action='post'>
          <div className='field'>
            <input
              type='text'
              name='name'
              required
              placeholder='Your Name'
            />
            <FontAwesome.FaQuestionCircle className='questionicon'/>
          </div>
          <div className='field'>
            <input
              type='email'
              name='email'
              required
              placeholder='Your Email'
            />
            <FontAwesome.FaQuestionCircle className='questionicon'/>
          </div>
          <p>This site uses Gravatar so if you want a profile image, use a Gravatar email</p>
          <div className='field'>
            <input
              type='password'
              name='password'
              required
              placeholder='Your password'
            />
            <FontAwesome.FaQuestionCircle className='questionicon'/>
          </div>
          <div className='field'>
            <input
              type='password'
              name='password'
              required
              placeholder='Confirm your password'
            />
            <FontAwesome.FaQuestionCircle className='questionicon'/>
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
