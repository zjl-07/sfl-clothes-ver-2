import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "redux/cart/cart.action";
import { selectCartItemCount } from "redux/cart/cart.selector";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  console.log(itemCount);
  return (
    <div className="cart" onClick={toggleCartHidden}>
      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      {/* <div className="count">{itemCount}</div> */}
    </div>
  );
};

const mapStateToProps = state => ({
  itemCount: selectCartItemCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
