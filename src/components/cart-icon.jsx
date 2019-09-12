import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "redux/cart/cart.action";
import { selectCartItemCount } from "redux/cart/cart.selector";

const CartIcon = ({ dispatch, itemCount }) => {
  return (
    <div
      className="cart"
      onClick={() => {
        dispatch(toggleCartHidden());
      }}
    >
      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      <div className="count">{itemCount}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
});

export default connect(mapStateToProps)(CartIcon);
