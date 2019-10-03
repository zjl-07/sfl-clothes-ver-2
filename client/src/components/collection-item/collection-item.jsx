import React from "react";
import { connect } from "react-redux";
import { addItem } from "redux/cart/cart.action";
import {
  CollectionItemContainer,
  ImageContainer,
  AddButton,
  NameContainer,
  FooterContainer,
  PriceContainer
} from "./collection-item.style";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer className="image" imageUrl={imageUrl} />
      <FooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </FooterContainer>
      <AddButton className="button" inverted onClick={() => addItem(item)}>
        Add to Cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
