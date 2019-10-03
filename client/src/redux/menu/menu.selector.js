import { createSelector } from "reselect";

const selectMenu = state => state.menu;

export const selectMenuItemList = createSelector(
  [selectMenu],
  menu => menu.menuItemList
);
