
import { async } from '@firebase/util';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  

  const handleEmailBlur = event => {
    setEmail(event.target.value)
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value)
  }


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
   
    if (error) {
      errorElement = <p className="text-danger">Error: {error?.message}</p>;
    }
  
  
  const handleLoginFormSubmit = event => {
        event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }
    const navigateRegister = event => {
      navigate("/register");
  };
    const ResetPassword = async (event) => {
   
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
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {errorElement}
        <Button className="w-100 mb-2" variant="primary" type="submit">
          Login
        </Button>
      </Form>
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
        Reset Password ?
        <button
          className="btn btn-link text-warning pe-auto text-decoration-none "
          onClick={ResetPassword}
        >
          Reset Password
        </button>
      </p>
<SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;