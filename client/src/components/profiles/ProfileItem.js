import React from 'react'
import { Link } from 'react-router-dom'

import isEmpty from '../../validation/is-empty'

class ProfileItem extends React.Component {

  render() {
    const { profile } = this.props
    return(
      <Link
        className='profileItem'
        to={`/profiles/${profile.handle}`}>
        <div className="image">
          <img src={profile.user.avatar} alt={profile.user.name}/>
        </div>
        <div className="content">
          <div className="title">
            <h4>{profile.user.name}</h4>
            <h5>{profile.status}</h5>
          </div>
          <div className="text">
            <p
              className='company'>
              Company:{' '}
              { isEmpty(profile.company)
                  ? null
                  : <span>{profile.company}</span> }
            </p>
            <p
              className='skills'>
              {profile.skills.slice(0, 5).map( skill =>
                <span key={skill}>{skill}</span>
              )}
            </p>
            <p className='bio'>{profile.bio.substring(0, 100)}{'...'}</p>
          </div>
        </div>
        <div className="button">
          <p className='link'>Go to profile</p>
          <i className="fas fa-arrow-right"></i>
        </div>
      </Link>
    )
  }
}


export default ProfileItem
