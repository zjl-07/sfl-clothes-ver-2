import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItem, selectCartTotal } from "redux/cart/cart.selector";
import CheckoutItem from "components/checkout-item/checkout-item";
import StripeCheckoutButton from "components/stripe-button/stripe-button";
import {
  CheckoutContainer,
  CheckoutHeaderContainer,
  HeaderBodyContainer,
  HeaderBlockContainer,
  TextWarningContainer,
  TotalContainer
} from "./checkout.style";

const Checkout = ({ cartItems, total }) => {
  return (
    <CheckoutContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      <HeaderBodyContainer>
        {cartItems.map(cartItems => (
          <CheckoutItem key={cartItems.id} item={cartItems} />
        ))}
      </HeaderBodyContainer>
      <TotalContainer>
        <span>TOTAL: ${total}</span>
      </TotalContainer>
      <TextWarningContainer>
        *Please use the following test credit card for payment
        <br />
        4242 4242 4242 4242 - Exp: 12/20 - CVV: 123
      </TextWarningContainer>
      <StripeCheckoutButton price={total} />
    </CheckoutContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
