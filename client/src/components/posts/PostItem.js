import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { deletePost, likePost } from '../../actions/postActions'
import CommentItem from './CommentItem'

class PostItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false,
    }
  this.toggleComment = this.toggleComment.bind(this)
  }

  handleDeletePost(id) {
    this.props.deletePost(id)
  }

  handleLikePost(id) {
    this.props.likePost(id)
  }

  handleUserLike(likes) {
    const { auth } = this.props
    if (likes.filter(like => like.user === auth.user.id).length > 0)
      return true
      return false
  }

  toggleComment() {
    this.setState({
      toggle: !this.state.toggle,
    })
  }
  render() {
    const { post, auth, showActions } = this.props
    return (
      <Fragment>
        <div className='postitem'>
          <div className="profile">
            <img src={post.avatar} alt={post.name}/>
            <div className="data">
              <h4>{post.name}</h4>
              <h3><Moment format='YYYY.MM.DD'>{post.date}</Moment></h3>
              <h3><Moment format='HH'>{post.date}</Moment>h<Moment format='MM'>{post.date}</Moment>min</h3>
            </div>
          </div>
          <div className="postcontent">
            <p>{post.text}</p>
            { showActions && (
              <div className="social">
                <div
                  className="like"
                  onClick={this.handleLikePost.bind(this, post._id)}>
                  { this.handleUserLike(post.likes) === true
                      ? <i className="fas fa-heart"></i>
                      : <i className="far fa-heart"></i> }
                  <p>{post.likes.length} like(s)</p>
                  <p>{post.comments.length} comment(s)</p>
                </div>
                <Link to={`/post/${post._id}`}>Comment</Link>
              </div> ) }
          </div>
          { post.user === auth.user.id && showActions && (
            <div className="postdelete">
              <span onClick={this.handleDeletePost.bind(this, post._id)}>X</span>
            </div>)
          }
        </div>
        { showActions && post.comments.length > 0 && (
          <Fragment>
            <p className='displaycomment' onClick={this.toggleComment}>Display the Comment(s)</p>
            {this.state.toggle && (
              <div className="comment">
                {post.comments.map(comment =>
                  <CommentItem
                    postId={post._id}
                    key={comment._id}
                    comment={comment}
                    showActions={false}
                  />
                )}
              </div>)}
          </Fragment>
        )}
      </Fragment>
    )
  }
}

PostItem.defaultProps = {
  showActions: true,
}
PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  likePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { deletePost, likePost })(PostItem)
