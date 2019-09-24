import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsFetching } from "redux/shop/shop.selector";
import withSpinner from "components/with-spinner/with-spinner";
import collectionsOverview from "./collections-overview";

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectIsCollectionsFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(collectionsOverview);

export default CollectionsOverviewContainer;
