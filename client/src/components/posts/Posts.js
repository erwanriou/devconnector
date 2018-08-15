import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AddPost from './AddPost'
import Spinner from '../common/Spinner'

class Posts extends React.Component {

  render() {
    return (
      <div className='posts'>
        <div className="container">
          <AddPost />
        </div>
      </div>
    )
  }
}

export default Posts
