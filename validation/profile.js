const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = validateProfileInput = data => {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';

  // Handle
  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle needs to be between 2 and 40 characters';
  }
  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Handle field is required';
  }

  // Status
  if (Validator.isEmpty(data.status)) {
    errors.status = 'Status field is required';
  }

  // Skills
  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Skills field is required';
  }

  // Website
  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = 'Not a valid url';
    }
  }

  // Youtube
  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Not a valid url';
    }
  }

  // Twitter
  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = 'Not a valid url';
    }
  }

  // Facebook
  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Not a valid url';
    }
  }

  // Linkedin
  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = 'Not a valid url';
    }
  }

  // Instagram
  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'Not a valid url';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
