import React from 'react';
import InputMask from 'react-input-mask';

const MaskedDateField = ({ input, meta }) => (
  <div>
    <InputMask
      mask="99-99-9999"
      placeholder="DD-MM-YYYY"
      value={input.value}
      onChange={input.onChange}
      className="form-control"
    />
    {meta.touched && meta.error && (
      <div className="text-danger mt-1">{meta.error}</div>
    )}
  </div>
);

export default MaskedDateField;