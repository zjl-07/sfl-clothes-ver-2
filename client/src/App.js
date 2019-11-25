import React, { useEffect, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "redux/user/user.selector";
import { checkUserAuthentication } from "redux/user/user.action";
import Header from "components/header/header";
import Spinner from "components/spinner/spinner";
import ErrorBoundary from "components/error-boundary/error-boundary";
import "./App.css";
//import { GlobalStyle } from "global.styles";

const HomePage = lazy(() => import("pages/homepage/homepage"));
const ShopPage = lazy(() => import("pages/shop/shop"));
const Login = lazy(() => import("pages/login-register/login"));
const Register = lazy(() => import("pages/login-register/register"));
const Checkout = lazy(() => import("pages/checkout/checkout"));
const ContactUs = lazy(() => import("pages/contact-us/contact-us"));

const App = ({ checkUserAuthentication, currentUser }) => {
  useEffect(() => {
    checkUserAuthentication();
  }, [checkUserAuthentication]);

  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </ErrorBoundary>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
