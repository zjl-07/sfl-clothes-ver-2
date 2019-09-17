import React from "react";
import MenuItemList from "components/menu-item-list/menu-item-list";
import { HomePageContainer } from "./homepage.style.jsx";

const HomePage = () => {
  return (
    <HomePageContainer>
      <MenuItemList />
    </HomePageContainer>
  );
};

export default HomePage;
