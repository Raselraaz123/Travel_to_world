import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
    const navigateRegister = (event) => {
      navigate("/register");
    };
  return (
    <div>
      <h2 className="text-center mt-3 font-style">please Login</h2>
      <Form className="w-50 mx-auto mt-3 mb-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Button className="w-100 mb-2" variant="primary" type="submit">
          Login
        </Button>
        <p className="text-center">
          New to website ?
          <Link
            to="/register"
            className="text-warning pe-auto text-decoration-none "
            onClick={navigateRegister}
          >
            Please Register
          </Link>
        </p>
        <p className="text-center">
          Forget Password ?
          <button
            className="btn btn-link text-warning pe-auto text-decoration-none "
            // onClick={ResetPassword}
          >
            Reset Password
          </button>
        </p>
      </Form>
    </div>
  );
};

export default Login;