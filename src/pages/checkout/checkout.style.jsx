import styled from "styled-components";
import { scrollBar } from "assets/styles/mixins";
import { color } from "assets/styles/variables";

export const CheckoutContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  button {
    margin-left: auto;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.2rem solid ${color.subColor};
`;

export const HeaderBodyContainer = styled.div`
  width: 100%;
  height: 43rem;
  overflow-y: scroll;
  border-bottom: 0.2rem solid ${color.subColor};
  ${scrollBar}
`;

export const HeaderBlockContainer = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  width: 20%;

  &:last-child {
    width: 8%;
  }
`;

export const TextWarningContainer = styled.div`
  text-align: center;
  font-size: 1.4rem;
  color: ${color.redColor};
`;

export const TotalContainer = styled.div`
  margin-top: 2rem;
  margin-left: auto;
  font-size: 2rem;
`;
