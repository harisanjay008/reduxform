import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

const DropdownDateField = ({ input, meta }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    if (day && month && year) {
      const date = new Date(year, month - 1, day);
      input.onChange(date);
    }
  }, [day, month, year]);

  return (
    <div>
      <div className="d-flex gap-2">
        <Form.Select value={day} onChange={e => setDay(e.target.value)}>
          <option value="">Day</option>
          {days.map(d => <option key={d} value={d}>{d}</option>)}
        </Form.Select>
        <Form.Select value={month} onChange={e => setMonth(e.target.value)}>
          <option value="">Month</option>
          {months.map(m => <option key={m} value={m}>{m}</option>)}
        </Form.Select>
        <Form.Select value={year} onChange={e => setYear(e.target.value)}>
          <option value="">Year</option>
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </Form.Select>
      </div>
      {meta.touched && meta.error && (
        <div className="text-danger mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default DropdownDateField;