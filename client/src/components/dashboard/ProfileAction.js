import React from 'react'
import { Link } from 'react-router-dom'

const ProfileAction = () => {
  return (
    <div className='profileAction'>
      <Link
        className='profileActionLinks'
        to='/edit-profile'>
        Edit Profile
        <i className="fas fa-user-edit"></i>
      </Link>
      <Link
        className='profileActionLinks'
        to='/add-experience'>
        Add Experience
        <i className="fas fa-briefcase"></i>
      </Link>
      <Link
        className='profileActionLinks'
        to='add-education'>
        Add Education
        <i className="fas fa-graduation-cap"></i>
      </Link>
    </div>
  )
}

export default ProfileAction
