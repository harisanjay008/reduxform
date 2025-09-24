export const combineValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const required = value => (value ? undefined : 'This field is required');

export const validateEmail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
