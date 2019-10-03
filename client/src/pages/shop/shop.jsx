import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "redux/shop/shop.action";
import collectionsOverviewContainer from "components/collections-overview/collections-overview.container";
import CollectionPageContainer from "pages/collection/collection.container";

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={collectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
