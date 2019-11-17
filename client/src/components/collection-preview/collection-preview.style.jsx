import styled from "styled-components";
import { primaryFont } from "assets/styles/mixins";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  @media screen and (max-width: 411px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.div`
  ${primaryFont};
  font-size: 2.8rem;
  margin-bottom: 2.5rem;
  text-transform: uppercase;
  cursor: pointer;
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 411px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`;
