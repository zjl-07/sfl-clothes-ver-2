import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "redux/shop/shop.selector";
import withSpinner from "components/with-spinner/with-spinner";
import collectionPage from "./collection";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(collectionPage);

export default CollectionPageContainer;
