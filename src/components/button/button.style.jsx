import styled, { css } from "styled-components";
import { primaryFont } from "assets/styles/mixins";
import { color } from "assets/styles/variables";

const buttonStyles = css`
  background-color: ${color.mainColor};
  color: ${color.mainLightColor};
  border: none;
`;

const invertedButtonStyles = css`
  background: ${color.mainLightColor};
  color: ${color.mainColor};
  border: none;

  &:hover {
    background-color: ${color.mainColor};
    color: ${color.mainLightColor};
  }
`;

const googleSignInStyles = css`
  background-color: ${color.redColor};
  color: ${color.mainLightColor};
  border: 0.05rem solid ${color.redColor};
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const ButtonContainer = styled.button`
  ${primaryFont};
  min-width: 20rem;
  width: auto;
  height: 5rem;
  letter-spacing: 0.05rem;
  padding: 0 4rem 0 4rem;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles};
`;
