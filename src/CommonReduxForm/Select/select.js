import React from 'react';
import { Form } from 'react-bootstrap';

const Select = ({ input, options, meta: { touched, error } }) => (
  <Form.Group>
    <Form.Select {...input} isInvalid={touched && error}>
      {options.map(option => (
        <option key={option.value} value={option.value} disabled={option.value === ""}>
          {option.label}
        </option>
      ))}
    </Form.Select>
    {touched && error && <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>}
  </Form.Group>
);

export default Select;
