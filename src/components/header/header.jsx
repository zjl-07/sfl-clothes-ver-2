import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "redux/cart/cart.selector";
import { selectCurrentUser } from "redux/user/user.selector";
import { logoutStart } from "redux/user/user.action";
import Logo from "assets/logo.png";
import CartIcon from "components/cart-icon/cart-icon";
import CartDropdown from "components/cart-dropdown/cart-dropdown";
import {
  HeaderContainer,
  LogoLink,
  OptionsContainer,
  OptionLink,
  ImageContainer
} from "./header.style.jsx";

const Header = ({ currentUser, hidden, logoutStart }) => {
  return (
    <HeaderContainer>
      <LogoLink to="/">
        <ImageContainer src={Logo} alt="Logo" className="logo" />
      </LogoLink>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/contact-us">Contact</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => logoutStart()}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to="/login">Login</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  logoutStart: () => dispatch(logoutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
