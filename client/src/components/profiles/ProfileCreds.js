import React from 'react'
import Moment from 'react-moment'
import isEmpty from '../../validation/is-empty'

class ProfileCreds extends React.Component {

  render() {
    const { experience, education } = this.props
    const expItems = experience.map(exp =>(
      <li
        key={exp._id}
        className='experience'>
        <h3>{exp.company}</h3>
        <p className='date'>
          <Moment format='YYYY.MM.DD'>{exp.from}</Moment>
          {' - '}
          { exp.to === null
            ? ('Now')
            : (<Moment format='YYYY.MM.DD'>{exp.to}</Moment>)
          }
        </p>
        <p className='position'><strong>Position: </strong>{exp.title}</p>
        <p className='location'>
          { exp.location === ''
              ? null
              : <span><strong>Location: </strong>{exp.location}</span> }
        </p>
        <p className='description'>
          { exp.description === ''
              ? null
              : <span>
                  <strong>Description: </strong>{exp.description
                    .trim()
                    .split('. ')
                    .map((paragraph, index) => (
                      <p className='desc' key={index}>{paragraph}</p>
                  ))}
                </span> }
        </p>
      </li>
    ))
    const eduItems = education.map(edu =>(
      <li
        key={edu._id}
        className='education'>
        <h3>{edu.school}</h3>
        <p className='date'>
          <Moment format='YYYY.MM.DD'>{edu.from}</Moment>
          {' - '}
          { edu.to === null
            ? ('Now')
            : (<Moment format='YYYY.MM.DD'>{edu.to}</Moment>)
          }
        </p>
        <p className='position'><strong>Degree: </strong>{edu.degree}</p>
        <p className='location'>
          { edu.fieldofstudy === ''
              ? null
              : <span><strong>Field Of Study: </strong>{edu.fieldofstudy}</span> }
        </p>
        <p className='description'>
          { edu.description === ''
              ? null
              : <span>
                  <strong>Description: </strong>{edu.description
                    .trim()
                    .split('. ')
                    .map((paragraph, index) => (
                      <p className='desc' key={index}>{paragraph}</p>
                  ))}
                </span> }
        </p>
      </li>
    ))
    return(
      <div className='profilecreds'>
        <div className="container">
          <div className="content">
            <ul className="experiences">
              <h1>Job Experiences</h1>
              {expItems}
            </ul>
            <ul className="educations">
              <h1>Education historic</h1>
              {eduItems}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}



export default ProfileCreds
