import React, { Fragment } from 'react'
import { PropTypes } from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Moment from 'react-moment'

class Experience extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const experience = this.props.experience
      .map(exp => (
        <tr key={exp.id}>
          <td>{exp.company}</td>
          <td>{exp.title}</td>
          <td>
            <Moment format='YYYY.MM.DD'>{exp.from}</Moment>
            {' - '}
            { exp.to === null
              ? ('Now')
              : (<Moment format='YYYY.MM.DD'>{exp.to}</Moment>)
            }
          </td>
          <td><button>Delete</button></td>
        </tr>
      ))

    return (
      <Fragment>
        <h4>Experience Credentials</h4>
        <table>
          <thead>
            <tr>
              <td>Company</td>
              <td>Title</td>
              <td>Years</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {experience}
          </tbody>
        </table>

      </Fragment>
    )
  }
}

Experience.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
})

export default withRouter(connect(mapStateToProps)(Experience))
