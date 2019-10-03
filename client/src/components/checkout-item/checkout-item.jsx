import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart, addItem, deleteItem } from "redux/cart/cart.action";
import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  TextContainer,
  RemoveButtonContainer
} from "./checkout-item.style";

const CheckoutItem = ({ item, clearItemFromCart, addItem, deleteItem }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item"></img>
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <i className="fa fa-chevron-left" onClick={() => deleteItem(item)}></i>
        <span>{quantity}</span>
        <i className="fa fa-chevron-right" onClick={() => addItem(item)}></i>
      </QuantityContainer>
      <TextContainer>${price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(item)}>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </RemoveButtonContainer>
    </CheckoutItemContainer>
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
