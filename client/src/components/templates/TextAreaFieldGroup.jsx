import React from 'react';
import { func, string } from 'prop-types';

const propTypes = {
  error: string,
  info: string,
  onChange: func.isRequired,
  name: string.isRequired,
  placeholder: string,
  value: string.isRequired
};

const TextAreaFieldGroup = ({
  error,
  info,
  onChange,
  name,
  placeholder,
  value
}) => {
  return (
    <div className="form-group">
      <textarea
        className={
          'form-control form-control-lg' + (error ? ' is-invalid' : '')
        }
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextAreaFieldGroup.propTypes = propTypes;

export default TextAreaFieldGroup;
