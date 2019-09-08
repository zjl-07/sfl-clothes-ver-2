import React, { Component } from "react";
import MenuItem from "components/menu-item";
import { MENU_ITEM_DATA } from "services/data";

class MenuItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: MENU_ITEM_DATA
    };
  }

  render() {
    const { sections } = this.state;

    return (
      <div className="menu_item">
        {sections.map(({ id, ...rest }) => (
          <MenuItem key={id} {...rest} />
        ))}
      </div>
    );
  }
}

export default MenuItemList;
