import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Spinner from '../common/Spinner'
import PostItem from './PostItem'
import AddComment from './AddComment'
import CommentItem from './CommentItem'
import { getPost } from '../../actions/postActions'

class Post extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params
    id && this.props.getPost(id)
  }

  render() {
    const { post, loading } = this.props.post
    let postContent

    post === null || loading || Object.keys(post).length === 0
      ? postContent = <Spinner />
      : postContent = (
        <div>
          <PostItem post={post} showActions={false}/>
          <AddComment postId={post._id}/>
          <div className="comment">
            {post.comments.map(comment =>
              <CommentItem
                showActions={true}
                postId={post._id}
                key={comment._id}
                comment={comment}/>
            )}
          </div>
        </div>
      )
    return (
      <div className='post'>
        <div className="bluelign">
          <div className="container submenu">
            <Link to='/feed' className="goback">
              <i className="fas fa-arrow-left"></i>
              <h4>Go back to Feed</h4>
            </Link>
          </div>
        </div>
        <div className="margin container">
          {postContent}
        </div>
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
