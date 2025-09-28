import React from 'react';
import DatePicker from 'react-datepicker';

const DatePickerField = ({ input, meta, dateFormat = "dd/MM/yyyy", ...rest }) => (
  <div>
    <DatePicker
      {...rest}
      selected={input.value ? new Date(input.value) : null}
      onChange={date => input.onChange(date)}
      dateFormat={dateFormat}
      className="form-control"
    />
    {meta.touched && meta.error && (
      <div className="text-danger mt-1">{meta.error}</div>
    )}
  </div>
);

export default DatePickerField;