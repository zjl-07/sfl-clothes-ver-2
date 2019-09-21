import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "redux/shop/shop.selector";
import CollectionItem from "components/collection-item/collection-item";
import {
  CollectionPageContainer,
  TitleContainer,
  ItemContainer
} from "./collection.style";

const CollectionPage = ({ collection: { title, items } }) => {
  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
