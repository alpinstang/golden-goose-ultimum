import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {isGoogleSignIn ? <i className="fa fa-google margin-right"></i> : null}
      {children}
    </button>
  );
};

export default CustomButton;
