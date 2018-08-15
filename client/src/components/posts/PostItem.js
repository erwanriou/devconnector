import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { deletePost } from '../../actions/postActions'

class PostItem extends React.Component {
  handleDeletePost(id) {
    this.props.deletePost(id)
  }

  render() {
    const { post, auth } = this.props
    return (
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
          <div className="social">
            <i className="far fa-heart"></i>
            <p>{post.likes.length} likes</p>
            <Link to={`/post/${post._id}`}>Comment</Link>
          </div>
        </div>
        { post.user === auth.user.id && (
          <div className="postdelete">
            <span onClick={this.handleDeletePost.bind(this, post._id)}>X</span>
          </div>)
        }
      </div>
    )
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { deletePost })(PostItem)
