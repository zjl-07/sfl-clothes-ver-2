import React from "react";

import { ButtonContainer } from "./button.style";

const Button = ({ children, ...props }) => (
  <ButtonContainer {...props}>{children}</ButtonContainer>
);

export default Button;
