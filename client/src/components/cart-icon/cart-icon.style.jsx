import styled from "styled-components";
import { color } from "assets/styles/variables";

export const CartIconContainer = styled.div`
  cursor: pointer;
`;

export const CountIconContainer = styled.div`
  font-size: 1.2rem;
  position: absolute;
  top: 4rem;
  right: 1.7rem;
  background-color: ${color.redColor};
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  text-align: center;
  line-height: normal;
  color: ${color.mainLightColor};
  font-weight: bolder;
`;
