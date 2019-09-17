import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItem, selectCartTotal } from "redux/cart/cart.selector";
import CheckoutItem from "components/checkout-item/checkout-item";
import StripeCheckoutButton from "components/stripe-button/stripe-button";

const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div className="checkout-body">
        {cartItems.map(cartItems => (
          <CheckoutItem key={cartItems.id} item={cartItems} />
        ))}
      </div>
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payment
        <br />
        4242 4242 4242 4242 - Exp: 12/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
