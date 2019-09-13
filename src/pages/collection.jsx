import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "redux/shop/shop.selector";
import CollectionItem from "components/collection-item";

const CollectionPage = ({ collection: { title, items } }) => {
  return (
    <div className="collection-page">
      <span className="title">{title}</span>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
