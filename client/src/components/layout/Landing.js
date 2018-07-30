import React from 'react'
import { Link } from 'react-router-dom'

class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <div className="dark">
          <div className='container'>
            <h1>Developer Connector</h1>
            <h2>Create a developer profile/portfolio, share posts and get help from other developers</h2>
            <div className="register">
              <Link className='greenbtn' to='/register'>Sign Up</Link>
              <Link className='whitebtn' to='/login'>Login</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
