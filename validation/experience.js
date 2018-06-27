const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = validateLoginInput = data => {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  // Title
  if (Validator.isEmpty(data.title)) {
    errors.title = 'Job title field is required';
  }

  // Company
  if (Validator.isEmpty(data.company)) {
    errors.company = 'Company field is required';
  }

  // From
  if (Validator.isEmpty(data.from)) {
    errors.from = 'Date from field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
