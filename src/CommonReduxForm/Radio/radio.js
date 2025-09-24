import React from 'react';
import { Form } from 'react-bootstrap';

const Radio = ({ input, label, options, meta: { touched, error } }) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
    {options.map(option => (
      <Form.Check
        {...input}
        key={option.value}
        type="radio"
        label={option.label}
        value={option.value}
        checked={input.value === option.value}
        isInvalid={touched && error}
      />
    ))}
    {touched && error && <div className="invalid-feedback d-block">{error}</div>}
  </Form.Group>
);

export default Radio;
