import styled from "styled-components";
import { primaryFont } from "assets/styles/mixins";

const getButtonLayout = props => {
  return props.center
    ? "justify-content: center"
    : "justify-content: space-between";
};

export const TitleContainer = styled.h1`
  ${primaryFont};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  ${getButtonLayout};
`;

export const DetailsContainer = styled.div`
  margin-top: 2rem;
`;
