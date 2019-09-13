import React from "react";
import { Route } from "react-router-dom";
import collectionsOverview from "components/collections-overview";
import collectionPage from "pages/collection";

const ShopPage = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={collectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={collectionPage} />
    </div>
  );
};

export default ShopPage;
