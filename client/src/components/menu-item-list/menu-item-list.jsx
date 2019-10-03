import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenuItemList } from "redux/menu/menu.selector";
import MenuItem from "components/menu-item/menu-item";
import { MenuItemListContainer } from "./menu-item-list.style";

const MenuItemList = ({ sections }) => {
  return (
    <MenuItemListContainer>
      {sections.map(({ id, ...rest }) => (
        <MenuItem key={id} {...rest} />
      ))}
    </MenuItemListContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectMenuItemList
});

export default connect(mapStateToProps)(MenuItemList);
