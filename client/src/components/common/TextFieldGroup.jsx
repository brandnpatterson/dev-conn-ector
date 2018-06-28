import React from 'react';
import { func, string } from 'prop-types';

const propTypes = {
  disabled: string,
  error: string,
  info: string,
  onChange: func.isRequired,
  name: string.isRequired,
  placeholder: string,
  type: string.isRequired,
  value: string.isRequired
};

const TextFieldGroup = ({
  disabled,
  error,
  info,
  onChange,
  name,
  placeholder,
  type,
  value
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={
          'form-control form-control-lg' + (error ? ' is-invalid' : '')
        }
        disabled={disabled}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextFieldGroup.propTypes = propTypes;

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
