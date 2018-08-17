import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { deleteComment } from '../../actions/postActions'

class CommentItem extends React.Component {

  handleDeleteComment(postId, commentId) {
    this.props.deleteComment(postId, commentId)
  }

  render() {
    const { comment, postId, auth, showActions } = this.props
    return (
      <div className="commentitem">
        <div className="commentinfo">
          <p>Comment</p>
        </div>
        <div className="profile">
          <img src={comment.avatar} alt={comment.name}/>
          <div className="data">
            <h4>{comment.name}</h4>
            <h3><Moment format='YYYY.MM.DD'>{comment.date}</Moment></h3>
            <h3><Moment format='HH'>{comment.date}</Moment>h<Moment format='MM'>{comment.date}</Moment>min</h3>
          </div>
        </div>
        <div className="postcontent">
          <p>{comment.text}</p>
        </div>
        { comment.user === auth.user.id && showActions && (
          <div className="commentdelete">
            <span onClick={this.handleDeleteComment.bind(this, postId, comment._id)}>X</span>
          </div>)
        }
      </div>
    )
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { deleteComment })(CommentItem)
