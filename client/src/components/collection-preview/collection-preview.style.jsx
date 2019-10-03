import styled from "styled-components";
import { primaryFont } from "assets/styles/mixins";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
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
`;
