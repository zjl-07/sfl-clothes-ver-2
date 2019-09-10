import React from "react";
import Button from "components/button";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-item"></div>
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
