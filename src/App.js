import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "redux/user/user.selector";
import { checkUserAuthentication } from "redux/user/user.action";
import HomePage from "pages/homepage/homepage";
import ShopPage from "pages/shop/shop";
import Login from "pages/login-register/login";
import Register from "pages/login-register/register";
import Checkout from "pages/checkout/checkout";
import ContactUs from "pages/contact-us/contact-us";
import Header from "components/header/header";
import "./App.css";

const App = ({ checkUserAuthentication, currentUser }) => {
  useEffect(() => {
    checkUserAuthentication();
  }, [checkUserAuthentication]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact-us" component={ContactUs} />
        <Route
          exact
          path="/checkout"
          render={() => (currentUser ? <Checkout /> : <Login />)}
        />
        <Route
          exact
          path="/login"
          render={() => (currentUser ? <Redirect to="/" /> : <Login />)}
        />
        <Route
          exact
          path="/register"
          render={() => (currentUser ? <Redirect to="/" /> : <Register />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  checkUserAuthentication: userData =>
    dispatch(checkUserAuthentication(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
