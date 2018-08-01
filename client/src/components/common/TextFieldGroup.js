import React, {Fragment } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Popup from 'reactjs-popup'
import * as FontAwesome from 'react-icons/fa'

import Card from  '../auth/Card'

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  infor,
  type,
  onChange,
  disabled,
  title
}) => {
  return (
    <Fragment>
      <div className='field'>
        <input
          className={classnames('', {
            'invalid': error
          })}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
        <Popup
          trigger={<FontAwesome.FaQuestionCircle className='questionicon'/>}
          position="right center"
          on="hover">
          <Card title={title} />
        </Popup>
      </div>
      { error && (<p>{error}</p>) }
    </Fragment>
  )
}

TextFieldGroup.proptypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup
