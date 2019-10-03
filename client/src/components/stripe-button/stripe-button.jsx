import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForTripe = price * 100;
  const publishableKey = "pk_test_cg5tQc24gZTGLbdoj1S2D4zx00uJEuPBsT";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForTripe,
        token: token
      }
    })
      .then(response => {
        alert("succesful payment");
      })
      .catch(error => {
        console.log("Payment Error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="SFL Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForTripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
