import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}
    >
      {isGoogleSignIn ? <i className="fa fa-google margin-right"></i> : null}
      {children}
    </button>
  );
};

export default CustomButton;
