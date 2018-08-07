import React from 'react'
import spinner from '../../utils/images/spinner.gif'
export default () => {
  return (
    <div className='spinner'>
      <img
        alt="Loading"
        src={spinner}
        style={{
          width: '200px',
          display: 'block'
        }}
      />
    </div>
  )
}
