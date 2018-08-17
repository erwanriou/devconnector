import React from 'react'
import Moment from 'react-moment'

class CommentItem extends React.Component {
  render() {
    const { comment } = this.props
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
      </div>
    )
  }
}


export default CommentItem
