import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { connect} from 'react-redux'

class Landing extends React.Component {
  
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }

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

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
}


const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(Landing)
