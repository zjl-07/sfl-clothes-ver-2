import React from "react";

const Button = ({ children, isGoogleSignIn, inverted, ...rest }) => {
  return (
    <button
      className={`button ${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
