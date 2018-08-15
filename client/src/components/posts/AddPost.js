import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import { addPost } from '../../actions/postActions'

class AddPost extends React.Component {
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
    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar,
    }

    this.props.addPost(newPost)
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
        <h2>Say Something...</h2>
        <form onSubmit={this.handleSubmit}>
          <TextAreaFieldGroup
            placeholder='Write your post here...'
            title='Required text'
            name='text'
            value={text}
            onChange={this.handleQueryInput}
            error={errors.text}
          />
          <button
            type='submit'
            className='submitbtn'>
            Send your post
          </button>
        </form>

      </div>
    )
  }
}

AddPost.propTypes = {
  addPost: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
})

export default connect(mapStateToProps, { addPost })(AddPost)
