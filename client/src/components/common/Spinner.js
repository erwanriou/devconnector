import React from 'react'
import spinner from '../../utils/images/spinner.gif'
export default () => {
  return (
    <div>
      <img
        alt="Loading"
        src={spinner}
        style={{
          width: '200px',
          margin: 'auto',
          display: 'block'
        }}
      />
    </div>
  )
}
