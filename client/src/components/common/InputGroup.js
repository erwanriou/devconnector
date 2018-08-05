import React, {Fragment } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const InputGroup = ({
  name,
  placeholder,
  type,
  value,
  error,
  icons,
  onChange,
}) => {
  return (
    <Fragment>
      <div className='field'>
        <i className={icons} />
        <input
          className={classnames('', {
            'invalid': error
          })}
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
      { error && (<p>{error}</p>) }
    </Fragment>
  )
}

InputGroup.proptypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
}
InputGroup.defaultProps = {
  type: 'text'
}

export default InputGroup
