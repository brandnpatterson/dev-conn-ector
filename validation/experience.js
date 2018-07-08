const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = validateExperienceInput = data => {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  // Title
  if (Validator.isEmpty(data.title)) {
    errors.title = 'Job title field is required';
  }
  if (!Validator.isLength(data.title, { min: 1, max: 30 })) {
    errors.title = 'Text field must be less than 30 characters';
  }

  // Company
  if (Validator.isEmpty(data.company)) {
    errors.company = 'Company field is required';
  }
  if (!Validator.isLength(data.company, { min: 1, max: 30 })) {
    errors.company = 'Text field must be less than 30 characters';
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
