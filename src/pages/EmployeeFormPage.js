import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';
import moment from 'moment';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import { FaPlus, FaTrash } from 'react-icons/fa';

import Input from "../input";
import DatePickerField from "../DatePickerField";
import DropdownDateField from "../DropdownDateField";

import { saveFormData } from "../redux/formSlice";
import {
  required,
  validateEmail,
  requiredDate,
  maxEmployees
} from '../valid';

const FORM_NAME = 'employeeForm';

const getDateField = (employee, index) => {
  switch (index % 2) {
    case 0:
      return (
        <Field
          name={`${employee}.joiningDateCalendar`}
          component={DatePickerField}
          dateFormat="dd/MM/yyyy"
          placeholder="Joining Date (Calendar)"
          validate={[requiredDate]}
        />
      );
    case 1:
      return (
        <Field
          name={`${employee}.joiningDateDropdown`}
          component={DropdownDateField}
          validate={[requiredDate]}
        />
      );
  
    default:
      return null;
  }
};

const renderEmployees = ({ fields, meta: { error, submitFailed } }) => (
  <ul className="list-unstyled">
    {fields.map((employee, index) => (
      <li key={index} className="mb-4 p-3 border rounded">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Employee {index + 1}</h4>
          <Button
            type="button"
            variant="danger"
            onClick={() => fields.remove(index)}
          >
            <FaTrash /> Remove
          </Button>
        </div>
        <Field
          name={`${employee}.email`}
          type="email"
          component={Input}
          placeholder="Employee Email"
          validate={[required, validateEmail]}
        />
        <Field
          name={`${employee}.password`}
          type="password"
          component={Input}
          placeholder="Create Password"
          validate={required}
          className="mt-3"
        />
        {getDateField(employee, index)}
      </li>
    ))}
    <li>
      <Button
        type="button"
        variant="success"
        onClick={() => fields.push({})}
        disabled={fields.length >= 5}
      >
        <FaPlus /> Add Employee
      </Button>
      {fields.length >= 5 && (
        <div className="text-warning mt-2">
          Maximum of 5 employees reached.
        </div>
      )}
      {submitFailed && error && <div className="text-danger mt-2">{error}</div>}
    </li>
  </ul>
);

const EmployeeFormPage = ({ handleSubmit, pristine, reset, submitting }) => {
  const dispatch = useDispatch();

  const handleData = (values) => {
    const formattedEmployees = values.employees.map(emp => {
      const rawDate =
        emp.joiningDateCalendar ||
        emp.joiningDateDropdown ||
        emp.joiningDateMasked;

      const formattedDate = moment(rawDate, ['DD-MM-YYYY', moment.ISO_8601], true).isValid()
        ? moment(rawDate).format('YYYY-MM-DD')
        : emp.joiningDateMasked;

      return {
        email: emp.email,
        password: emp.password,
        joiningDate: formattedDate
      };
    });

    console.log("Formatted Data:", formattedEmployees);
    dispatch(saveFormData({ employees: formattedEmployees }));
    alert('Form submitted! Check the console for formatted data.');
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-lg">
            <Card.Body>
              <h2 className="text-center text-secondary mb-4 fw-bold">Employee Management</h2>
              <Form onSubmit={handleSubmit(handleData)}>
                <FieldArray
                  name="employees"
                  component={renderEmployees}
                  validate={[maxEmployees(5)]}
                />
                <div className="d-flex justify-content-end gap-2 mt-4">
                  <Button variant="primary" type="submit" disabled={submitting}>
                    Submit All
                  </Button>
                  <Button variant="secondary" type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default reduxForm({
  form: FORM_NAME,
  initialValues: {
    employees: [{ email: '', password: '' }]
  }
})(EmployeeFormPage);