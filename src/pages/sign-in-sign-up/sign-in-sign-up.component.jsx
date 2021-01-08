import React from 'react';
import './sign-in-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';

const SignInSignUp = () => {
  return (
    <div className="sign-in-sign-up">
      <div className="form-column">
        <SignIn />
      </div>
      <div className="form-column">Sign Up</div>
    </div>
  );
};

export default SignInSignUp;
