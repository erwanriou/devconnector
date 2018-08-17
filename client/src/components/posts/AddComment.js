import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import { addComment } from '../../actions/postActions'

class AddComment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      errors: {},
    }
    this.handleQueryInput = this.handleQueryInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
    this.setState({ errors: this.props.errors });
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const { user } = this.props.auth
    const { postId } = this.props

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar,
    }

    this.props.addComment(postId, newComment)
    this.setState({
      text: '',
    })
  }

  handleQueryInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { text, errors } = this.state
    return (
      <div className='addpost'>
        <form onSubmit={this.handleSubmit}>
          <h3>Add a Comment...</h3>
          <TextAreaFieldGroup
            placeholder='Write your comment here...'
            title='Required text'
            name='text'
            value={text}
            onChange={this.handleQueryInput}
            error={errors.text}
          />
          <button
            type='submit'
            className='submitbtn'>
            Send your comment
          </button>
        </form>

      </div>
    )
  }
}

AddComment.propTypes = {
  addComment: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
})

export default connect(mapStateToProps, { addComment })(AddComment)
