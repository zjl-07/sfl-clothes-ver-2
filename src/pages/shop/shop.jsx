import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "firebase/firebase.utils";
import { updateCollections } from "redux/shop/shop.action";
import collectionsOverview from "components/collections-overview/collections-overview";
import withSpinner from "components/with-spinner/with-spinner";
import collectionPage from "pages/collection/collection";

const CollectionOverviewWithSpinner = withSpinner(collectionsOverview);
const CollectionPageWithSpinner = withSpinner(collectionPage);

class ShopPage extends Component {
  state = {
    isLoading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
