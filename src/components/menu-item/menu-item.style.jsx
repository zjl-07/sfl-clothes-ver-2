import styled from "styled-components";
import { primaryFont } from "assets/styles/mixins";
import { color } from "assets/styles/variables";

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 40rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0.1rem 0.1rem 1rem ${color.subColor};
  text-transform: uppercase;

  &:hover {
    cursor: pointer;

    .background-image {
      transform: scale(1.1);
      background-blend-mode: normal;
      transition: all 4s ease;
    }

    .content {
      opacity: 0.8;
      transition: all 2s ease;
    }
  }
`;

export const BackgroundImageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-color: ${color.backgroundBlendPink};
  background-position: center;
  background-blend-mode: luminosity;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  height: 10rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${color.mainLightColor};
  position: absolute;
  border-radius: 0.5rem;
  opacity: 0.6;
`;

export const ContentTitle = styled.div`
  ${primaryFont};
  font-size: 4rem;
  color: ${color.mainColor};
`;

export const ContentSubTitle = styled.span`
  font-weight: lighter;
`;
