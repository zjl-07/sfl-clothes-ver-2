import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "redux/shop/shop.selector";
import CollectionPreview from "components/collection-preview/collection-preview";

const CollectionsOverview = ({ collections }) => {
  console.log("Collection:", collections);
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
