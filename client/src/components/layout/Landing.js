import React from 'react'

class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <div className="dark">
          <div className='container'>
            <h1>Developer Connector</h1>
            <h2>Create a developer profile/portfolio, share posts and get help from other developers</h2>
            <div className="register">
              <button className='greenbtn'>Sign Up</button>
              <button className='whitebtn'>Login</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Landing
