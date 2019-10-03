import React from "react";
import { withRouter } from "react-router-dom";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubTitle
} from "./menu-item.style";

const MenuItem = ({ title, imageUrl, history, match, linkUrl }) => {
  return (
    <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer>
        <ContentTitle>{title}</ContentTitle>
        <ContentSubTitle>SHOP NOW!</ContentSubTitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
