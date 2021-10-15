import React, {useState} from 'react';
import {Button, Form, Offcanvas} from 'react-bootstrap';

export function Registration() {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Log in
      </Button>
      <Offcanvas show={show} onHide={handleShow}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Registration</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
