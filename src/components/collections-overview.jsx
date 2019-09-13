import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "redux/shop/shop.selector";
import CollectionPreview from "components/collection-preview";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
