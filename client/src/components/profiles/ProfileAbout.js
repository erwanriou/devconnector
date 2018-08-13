import React from 'react'

import isEmpty from '../../validation/is-empty'

class ProfileAbout extends React.Component {

  render() {
    const { profile } = this.props
    const firstName = profile.user.name
      .trim()
      .split(' ')[0]
    const bio = profile.bio
      .trim()
      .split('.')
      .map(paragraph => <p>{paragraph}</p>)
    const skills = profile.skills.map((skill, index) => (
      <div
        className='skill'
        key={index}>
        <i className="fas fa-hashtag"></i>
        <h4>{skill}</h4>
      </div>
    ))
    return(
      <div className='profileabout'>
        <div className="container">
          <div className="content">
            <div className="row">
              { isEmpty(profile.bio)
                ? null
                : ( <div className="bio element">
                      <h3>{firstName}'s bio</h3>
                      <div className='bioparagraph'>{bio}</div>
                    </div>) }
              <div className="skillsset element">
                <h3>Skill set</h3>
                <div className="skills">
                  {skills}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}



export default ProfileAbout
