import React from "react";
import { Link } from "react-router-dom";
import { auth } from "firebase/firebase.utils";
import { connect } from "react-redux";
import Logo from "assets/logo.png";
import CartIcon from "components/cart-icon";
import CartDropdown from "components/cart-dropdown";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/login">
            Login
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(
  mapStateToProps,
  null
)(Header);
