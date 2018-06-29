import React from 'react';
import { func, string } from 'prop-types';

const propTypes = {
  error: string,
  icon: string,
  onChange: func.isRequired,
  name: string.isRequired,
  placeholder: string,
  type: string.isRequired,
  value: string.isRequired
};

const InputGroup = ({
  error,
  icon,
  onChange,
  name,
  placeholder,
  type,
  value
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon} />
        </span>
      </div>
      <input
        className={
          'form-control form-control-lg' + (error ? ' is-invalid' : '')
        }
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputGroup.propTypes = propTypes;

InputGroup.defaultProps = {
  type: 'text'
};

export default InputGroup;
