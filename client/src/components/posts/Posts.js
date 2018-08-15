import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AddPost from './AddPost'
import PostFeed from './PostFeed'
import Spinner from '../common/Spinner'

import { getPosts } from '../../actions/postActions'

class Posts extends React.Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    const { posts, loading } = this.props.post
    let postContent

    posts === null || loading
      ? postContent = <Spinner />
      : postContent = <PostFeed posts={posts} />

    return (
      <div className='posts'>
        <div className="container">
          <AddPost />
          {postContent}
        </div>
      </div>
    )
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  post: state.post,
})

export default connect(mapStateToProps, { getPosts })(Posts)
