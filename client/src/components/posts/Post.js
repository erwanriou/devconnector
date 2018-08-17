import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Spinner from '../common/Spinner'
import { getPost } from '../../actions/postActions'

class Post extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params
    id  && this.props.getPost( id)
  }

  render() {
    return (
      <div>
        <h2>POST</h2>
      </div>
    )
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  post: state.post,
})

export default connect(mapStateToProps, { getPost })(Post)
