import React from 'react'

const Card = ({ title }) => (
  <div className="card">
    <div className="header">{title}</div>
    { title === 'Required Name' &&
       <div className="content">
          Your First and Last name together. This field is required
       </div> }
    { title === 'Required Email' &&
      <div className="content">
        This site uses Gravatar so if you want a profile image, use a Gravatar email
      </div> }
    { title === 'Required Password' &&
      <div className="content">
        The password should include upper-case and lower-case letters and one or more numerical digits. It should be at least 6 caraters lenght
      </div> }
  </div>
)

export default Card
