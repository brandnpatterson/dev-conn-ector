const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = validateRegisterInput = data => {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password_conf = !isEmpty(data.password_conf) ? data.password_conf : '';

  // Name
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  // Email
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  // Password
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at between 6 and 30 characters';
  }

  // Password Confirmation
  if (Validator.isEmpty(data.password_conf)) {
    errors.password_conf = 'Password Confirmation field is required';
  }
  if (!Validator.equals(data.password, data.password_conf)) {
    errors.password_conf = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
