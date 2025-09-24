import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Card, ListGroup, Alert, Button } from 'react-bootstrap';

const HomePage = () => {
  // Get form data from the Redux store
  const formData = useSelector((state) => state.formData.data);

  if (!formData) {
    return (
      <Container className="mt-5 text-center">
        <Alert variant="warning">
          No data submitted yet. Please go back and fill out the form.
        </Alert>
        <Button as={Link} to="/" variant="primary">Go to Form</Button>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Card className="shadow-lg">
        <Card.Header as="h3" className="text-center">Submitted Form Data</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item><strong>Email:</strong> {formData.email}</ListGroup.Item>
            <ListGroup.Item><strong>Password:</strong> {formData.password}</ListGroup.Item>
            <ListGroup.Item><strong>Gender:</strong> {formData.gender}</ListGroup.Item>
            <ListGroup.Item><strong>Mode:</strong> {formData.mode}</ListGroup.Item>
            <ListGroup.Item><strong>Languages:</strong> {formData.lang.join(', ')}</ListGroup.Item>
          </ListGroup>
          <div className="text-center mt-4">
            <Button as={Link} to="/" variant="secondary">Back to Form</Button>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted text-center">
            This data is stored in Redux and will be cleared on page refresh.
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default HomePage;
