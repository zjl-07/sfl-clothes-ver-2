import styled from "styled-components";
import { color } from "assets/styles/variables";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 10rem;
  border-bottom: 0.01rem solid ${color.subColor};
  padding: 1rem 0;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23.5%;
  padding-right: 10rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const RemoveButtonContainer = styled.div`
  color: ${color.redColor};
  padding-left: 1.2rem;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const TextContainer = styled.span`
  width: 23.5%;
`;

export const QuantityContainer = styled(TextContainer)`
  .fa {
    cursor: pointer;
  }
  span {
    margin: 2rem;
  }
`;
