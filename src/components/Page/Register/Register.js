import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from '../../../firebase.init'
import { async } from '@firebase/util';
import Loading from '../Loading/Loading'
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

   const navigateLogin = () => {
     navigate("/login");
  };
  if (loading) {
     return <Loading></Loading>
   }
  const handleRegisterForm = async (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
    const password = event.target.password.value;
    
    await createUserWithEmailAndPassword(email, password);
       navigate("/home");
  };
  return (
    <div>
      <h2 className="text-center mt-3 font-style">please Register</h2>
      <Form onSubmit={handleRegisterForm} className="w-50 mx-auto mt-3 mb-3">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button className="w-100  mx-auto mb-2" variant="primary" type="submit">
          Register
        </Button>
      </Form>
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
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;