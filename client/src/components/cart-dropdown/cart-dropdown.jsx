import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartItem } from "redux/cart/cart.selector";
import { toggleCartHidden } from "redux/cart/cart.action";
import CartItem from "components/cart-item/cart-item";
import {
  CartDropdownContainer,
  MessageContainer,
  CartItemsContainer,
  DropdownButton
} from "./cart-dropdown.style";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <MessageContainer>Your cart is empty!</MessageContainer>
        )}
      </CartItemsContainer>
      <DropdownButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go to checkout
      </DropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
