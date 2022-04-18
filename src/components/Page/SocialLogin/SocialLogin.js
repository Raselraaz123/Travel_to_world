import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import facebook from '../../../images/social-icon/facebook.png'
import google from '../../../images/social-icon/google.png'
import Loading from '../Loading/Loading';
import './SocialLogin.css'
const SocialLogin = () => {
    const navigate = useNavigate();
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
  
  let errorElement;

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }

  if (user || user1) {
    navigate("/home");
  }


  return (
    <div className="socialLogin-container">
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-3">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div className="mb-2">
        <button
          onClick={() => signInWithGoogle()}
          className="bg-white text-dark d-block mx-auto w-50 rounded border border-light "
        >
          <img height={40} src={google} alt="" />
          Google sign in
        </button>
      </div>
      <div className="mb-2">
        <button
          onClick={() => signInWithFacebook()}
          className="bg-white text-dark d-block mx-auto w-50 rounded border border-light  "
        >
          <img src={facebook} alt="" />
          Facebook sign in
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;