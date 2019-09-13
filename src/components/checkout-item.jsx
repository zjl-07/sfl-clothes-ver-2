import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart, addItem, deleteItem } from "redux/cart/cart.action";

const CheckoutItem = ({ item, clearItemFromCart, addItem, deleteItem }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <i class="fa fa-chevron-left" onClick={() => deleteItem(item)}></i>
        <span class="value">{quantity}</span>
        <i class="fa fa-chevron-right" onClick={() => addItem(item)}></i>
      </span>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={() => clearItemFromCart(item)}>
        <i class="fa fa-trash" aria-hidden="true"></i>
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  deleteItem: item => dispatch(deleteItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
