import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";

import Input from "../../CommonReduxForm/Input/input";
import Radio from "../../CommonReduxForm/Radio/radio";
import CheckBox from "../../CommonReduxForm/CheckBox/checkBox";
import Select from "./../../CommonReduxForm/Select/select";

import { saveFormData } from "../../redux/formSlice";
import { required, validateEmail, maxLength, minLength, combineValidators } from '../../Lib/CommonReduxValidation/validation';

const FORM_NAME = 'loginForm';

const LoginPageForm = ({ handleSubmit, dispatch: reduxFormDispatch }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleData = (values) => {
    dispatch(saveFormData(values)); // Save data to Redux store
    reduxFormDispatch(reset(FORM_NAME)); // Reset redux-form state
    navigate('/home'); // Navigate to home page
  };

  return (
    <div className="bg-light vh-100 d-flex justify-content-center align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <Card className="p-4 border-0 shadow-lg">
              <Card.Body>
                <Form className="d-flex flex-column gap-4" onSubmit={handleSubmit(handleData)}>
                  <h2 className="text-center text-secondary mb-4 fw-bold">Registration Form</h2>
                  <Field
                    name="email"
                    type="email"
                    component={Input}
                    placeholder="Enter your email"
                    validate={combineValidators(required, validateEmail)}
                  />
                  <Field
                    name="password"
                    type="password"
                    component={Input}
                    placeholder="Enter your password"
                    validate={combineValidators(required, minLength(6), maxLength(20))}
                  />
                  <Field
                    name="gender"
                    component={Select}
                    options={[
                      { value: "", label: "Select Gender" },
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" },
                    ]}
                    validate={required}
                  />
                  <Field
                    name="mode"
                    component={Radio}
                    label="Mode"
                    options={[
                      { value: "HYBRID", label: "Hybrid" },
                      { value: "online", label: "Online" },
                    ]}
                    validate={required}
                  />
                  <Field
                    name="lang"
                    component={CheckBox}
                    label="Languages"
                    options={[
                      { value: "French", label: "French" },
                      { value: "English", label: "English" },
                      { value: "Tamil", label: "Tamil" },
                    ]}
                    validate={required}
                  />
                  <Button variant="primary" type="submit" className="w-100 mt-3">
                    SUBMIT
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default reduxForm({
  form: FORM_NAME,
  // Set default values for the form
  initialValues: {
    mode: "HYBRID",   // This will pre-select the 'Hybrid' radio button
    lang: ["French"], // This will pre-select the 'French' checkbox
    gender: ""
  },
})(LoginPageForm);
