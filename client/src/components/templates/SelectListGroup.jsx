import React from 'react';
import { array, func, string } from 'prop-types';

const propTypes = {
  error: string,
  info: string,
  onChange: func.isRequired,
  name: string.isRequired,
  options: array.isRequired,
  value: string.isRequired
};

const SelectListGroup = ({ error, info, onChange, name, options, value }) => {
  const selectOptions = options.map(option => {
    return (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    );
  });
  return (
    <div className="form-group">
      <select
        className={
          'form-control form-control-lg' + (error ? ' is-invalid' : '')
        }
        name={name}
        onChange={onChange}
        options={options}
        value={value}
      >
        {selectOptions}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectListGroup.propTypes = propTypes;

export default SelectListGroup;
