import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "redux/cart/cart.action";
import { selectCartItemCount } from "redux/cart/cart.selector";
import { CartIconContainer, CountIconContainer } from "./cart-icon.style";

const CartIcon = ({ dispatch, itemCount }) => {
  return (
    <CartIconContainer
      onClick={() => {
        dispatch(toggleCartHidden());
      }}
    >
      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      <CountIconContainer>{itemCount}</CountIconContainer>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
});

export default connect(mapStateToProps)(CartIcon);
