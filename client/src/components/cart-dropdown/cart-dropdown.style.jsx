import styled from "styled-components";
import Button from "components/button/button";
import { color } from "assets/styles/variables";
import { scrollBar } from "assets/styles/mixins";

export const CartDropdownContainer = styled.div`
  font-size: 1.4rem;
  position: absolute;
  width: 25rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 0.1rem solid ${color.mainColor};
  background-color: ${color.mainLightColor};
  top: 9rem;
  right: 2.5rem;
  z-index: 5;
`;

export const MessageContainer = styled.span`
  margin: 0 auto;
  padding: 2rem;
`;

export const CartItemsContainer = styled.div`
  height: 30rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  ${scrollBar}
`;

export const DropdownButton = styled(Button)`
  margin-top: auto;
`;
