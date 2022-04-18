import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
      return <Loading></Loading>;
  } 
    if (user) {
      navigate(from, { replace: true });
    }
   
  
  const handleLoginFormSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
  }
    const navigateRegister = (event) => {
      navigate("/register");
  };
    const ResetPassword = async () => {
      const email = emailRef.current.value;
      if (email) {
        await sendPasswordResetEmail(email);
        toast("Sent email");
      } else {
        toast("please enter your email address");
      }
    };
  
  return (
    <div>
      <h2 className="text-center mt-3 font-style">please Login</h2>
      <Form onSubmit={handleLoginFormSubmit} className="w-50 mx-auto mt-3 mb-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
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
            onClick={ResetPassword}
          >
            Reset Password
          </button>
        </p>
      </Form>
    </div>
  );
};

export default Login;