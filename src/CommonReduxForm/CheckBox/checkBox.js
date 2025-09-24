import React from 'react';
import { Form } from 'react-bootstrap';

const CheckBox = ({ input, label, options, meta: { touched, error } }) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
    {options.map(option => (
      <Form.Check
        key={option.value}
        type="checkbox"
        label={option.label}
        value={option.value}
        checked={input.value.indexOf(option.value) !== -1}
        onChange={event => {
          const newValue = [...input.value];
          if (event.target.checked) {
            newValue.push(option.value);
          } else {
            newValue.splice(newValue.indexOf(option.value), 1);
          }
          return input.onChange(newValue);
        }}
        isInvalid={touched && error}
      />
    ))}
    {touched && error && <div className="invalid-feedback d-block">{error}</div>}
  </Form.Group>
);

export default CheckBox;
