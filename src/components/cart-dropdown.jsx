import React from "react";
import { connect } from "react-redux";
import { selectCartItem } from "redux/cart/cart.selector";
import Button from "components/button";
import CartItem from "components/cart-item";

const CartDropdown = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItem(state)
});

export default connect(
  mapStateToProps,
  null
)(CartDropdown);
