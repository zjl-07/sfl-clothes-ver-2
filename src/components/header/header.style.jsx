import styled from "styled-components";
import { Link } from "react-router-dom";
import { defaultFontSize, color } from "assets/styles/variables";
import { primaryFont } from "assets/styles/mixins";

export const HeaderContainer = styled.div`
  height: 6rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  border-bottom: 0.1rem solid ${color.lightColor};
`;

export const LogoLink = styled(Link)`
  height: 100%;
  width: 4rem;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${primaryFont};
  font-size: ${defaultFontSize};
  padding: 0 2rem;
  cursor: pointer;
`;

export const ImageContainer = styled.img`
  width: 5rem;
`;
