import React, { Fragment } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profileActions'

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getCurrentProfile()
  }

  render() {
    return (
      <Fragment>
        <h1>Dashboard</h1>
      </Fragment>
    )
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
