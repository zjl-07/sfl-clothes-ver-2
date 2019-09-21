import styled from "styled-components";
import { color } from "assets/styles/variables";
import Button from "components/button/button";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 45rem;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-bottom: 3rem;

  &:hover {
    .image {
      opacity: 0.8;
    }

    .button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0.1rem 0.1rem 1rem ${color.subColor};
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const AddButton = styled(Button)`
  border-radius: 0.25rem;
  width: 75%;
  position: absolute;
  top: 35rem;
  display: none;
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
`;
