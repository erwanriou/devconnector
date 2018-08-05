import React, {Fragment } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const SelectListGroup = ({
  name,
  value,
  error,
  onChange,
  options,
}) => {

  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ))

  return (
    <Fragment>
      <div className='field'>
        <select
          className={classnames('', {
            'invalid': error
          })}
          name={name}
          value={value}
          onChange={onChange}>
          {selectOptions}
        </select>
      </div>
      { error && (<p>{error}</p>) }
    </Fragment>
  )
}

SelectListGroup.proptypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
}

export default SelectListGroup
