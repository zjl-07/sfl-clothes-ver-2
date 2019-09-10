import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "redux/cart/cart.action";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart" onClick={toggleCartHidden}>
      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      <div className="count">0</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
