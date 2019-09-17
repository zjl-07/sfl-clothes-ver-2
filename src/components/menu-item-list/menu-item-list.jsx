import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenuItemList } from "redux/menu/menu.selector";
import MenuItem from "components/menu-item/menu-item";

const MenuItemList = ({ sections }) => {
  return (
    <div className="menu-item-list">
      {sections.map(({ id, ...rest }) => (
        <MenuItem key={id} {...rest} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectMenuItemList
});

export default connect(mapStateToProps)(MenuItemList);
