import React, {Fragment } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Popup from 'reactjs-popup'
import * as FontAwesome from 'react-icons/fa'

import Card from  '../auth/Card'

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  onChange,
  title,
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
  onChange: PropTypes.func.isRequired,
}

export default TextAreaFieldGroup
