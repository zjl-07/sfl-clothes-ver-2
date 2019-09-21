import styled from "styled-components";
import { shrinkLabel } from "assets/styles/mixins";
import { color } from "assets/styles/variables";

export const FormContainer = styled.div`
  margin: 0 auto;
  width: 45rem;
  text-align: center;
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 5rem 0;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: ${color.mainLightColor};
  color: ${color.subColor};
  padding: 1rem 0.5rem 1rem 0.5rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${color.subColor};
  margin: 3rem 0;

  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabel}
  }
`;

export const FormInputLabel = styled.label`
  color: ${color.subColor};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.3rem;
  top: 0.5rem;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabel}
  }
`;
