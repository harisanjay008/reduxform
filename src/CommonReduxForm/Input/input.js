import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({ input, type, placeholder, meta: { touched, error } }) => (
  <Form.Group>
    <Form.Control {...input} type={type} placeholder={placeholder} isInvalid={touched && error} />
    {touched && error && <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>}
  </Form.Group>
);

export default Input;
