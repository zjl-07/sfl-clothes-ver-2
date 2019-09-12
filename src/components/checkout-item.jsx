import React from "react";

const CheckoutItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="image-item"></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <span className="remove-button">
        <i class="fa fa-trash" aria-hidden="true"></i>
      </span>
    </div>
  );
};

export default CheckoutItem;
