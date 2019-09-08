import React from "react";

const Button = ({ children, isGoogleSignIn, ...rest }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} button`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
