import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
   const navigate = useNavigate();

   const navigateLogin = () => {
     navigate("/login");
   };
  return (
    <div>
      <h2 className="text-center mt-3 font-style">please Register</h2>
      <Form className="w-50 mx-auto mt-3 mb-3">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your Name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Button className="w-100  mx-auto mb-2" variant="primary" type="submit">
          Register
        </Button>
        <p className="text-center">
          Already have a account ?
          <Link
            to="/login"
            className="text-warning pe-auto text-decoration-none "
            onClick={navigateLogin}
          >
            Please Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;