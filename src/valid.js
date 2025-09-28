export const required = value => (value ? undefined : 'Required');

export const validateEmail = value =>
  value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ? undefined
    : 'Invalid email';

export const requiredDate = value => (value ? undefined : 'Date is required');

export const maxEmployees = max => (value, allValues) =>
  allValues.employees && allValues.employees.length > max
    ? `You can only add up to ${max} employees`
    : undefined;