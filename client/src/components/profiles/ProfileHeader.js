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
            <div className="icons">
              { isEmpty(profile.website)
                  ? null
                  : <a
                      href={profile.website}
                      target='_blank'>
                      <i className="fas fa-globe"></i>
                    </a>}
              { isEmpty(profile.social && profile.social.facebook)
                  ? null
                  : <a
                      href={profile.social.facebook}
                      target='_blank'>
                      <i className="fab fa-facebook-f"></i>
                    </a>}
              { isEmpty(profile.social && profile.social.linkedin)
                  ? null
                  : <a
                      href={profile.social.linkedin}
                      target='_blank'>
                      <i className="fab fa-linkedin-in"></i>
                    </a>}
              { isEmpty(profile.social && profile.social.youtube)
                  ? null
                  : <a
                      href={profile.social.youtube}
                      target='_blank'>
                      <i className="fab fa-youtube"></i>
                    </a>}
              { isEmpty(profile.social && profile.social.twitter)
                  ? null
                  : <a
                      href={profile.social.twitter}
                      target='_blank'>
                      <i className="fab fa-twitter"></i>
                    </a>}
              { isEmpty(profile.social && profile.social.instagram)
                  ? null
                  : <a
                      href={profile.social.instagram}
                      target='_blank'>
                      <i className="fab fa-instagram"></i>
                    </a>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default ProfileHeader
