import styled from "styled-components";
import { color } from "assets/styles/variables";

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  margin: 2rem 0;
  font-size: 2rem;
  color: ${color.subColor};
`;

export const ErrorImageDesc = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: ${color.subColor};
`;
