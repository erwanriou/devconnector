import React from 'react'

import isEmpty from '../../validation/is-empty'

class ProfileHeader extends React.Component {

  render() {
    const { profile } = this.props
    return(
      <div className="profileheader">
        <div className="container">
          <div className="content">
            <img src={profile.user.avatar} alt={profile.user.name}/>
            <h1>{profile.user.name}</h1>
            <h3>
              {profile.status}
              { isEmpty(profile.company)
                ? null
                : <span> at {profile.company}</span> }
            </h3>
            <h4>
              { isEmpty(profile.location)
                ? null
                : <span>{profile.location}</span> }
            </h4>
          </div>
        </div>
      </div>
    )
  }
}



export default ProfileHeader
