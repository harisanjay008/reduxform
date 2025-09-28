import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({ input, label, type, meta: { touched, error }, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        {...input}
        {...rest}
        type={type}
        isInvalid={touched && error}
      />
      {touched && error && (
        <Form.Control.Feedback type="invalid">
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default Input;