import React, {Fragment } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  onChange,
}) => {
  return (
    <Fragment>
      <div className='field'>
        <textarea
          className={classnames('', {
            'invalid': error
          })}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
      { error && (<p>{error}</p>) }
    </Fragment>
  )
}

TextAreaFieldGroup.proptypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default TextAreaFieldGroup
