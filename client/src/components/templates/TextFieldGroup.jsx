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
        className={
          'form-control form-control-lg' + (error ? ' is-invalid' : '')
        }
        disabled={disabled}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
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
