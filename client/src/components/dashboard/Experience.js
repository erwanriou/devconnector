import React, { Fragment } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'

import { deleteExperience } from '../../actions/profileActions'

class Experience extends React.Component {
  handleDelete(id) {
    this.props.deleteExperience(id)
  }

  render() {
    const experience = this.props.experience
      .map(exp => (
        <tr key={exp._id}>
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
          <td onClick={this.handleDelete.bind(this, exp._id)}>
            <span>Delete</span>
          </td>
        </tr>
      ))
    return (
      <Fragment>
        <h5>Experience Credentials</h5>
        <table>
          <thead>
            <tr>
              <td>Company</td>
              <td>Title</td>
              <td>Years</td>
              <td>X</td>
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
  deleteExperience: PropTypes.func.isRequired,
}

export default connect(null, { deleteExperience })(Experience)
