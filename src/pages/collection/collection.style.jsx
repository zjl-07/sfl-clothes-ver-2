import styled from "styled-components";
import { primaryFont } from "assets/styles/mixins";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.span`
  ${primaryFont};
  font-size: 4rem;
  margin: 0 auto 3rem;
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
`;
