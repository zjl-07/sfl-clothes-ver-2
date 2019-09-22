import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments
} from "firebase/firebase.utils";
import { setCurrentUser } from "redux/user/user.action";
import { selectCurrentUser } from "redux/user/user.selector";
import { selectCollectionsForPreview } from "redux/shop/shop.selector";
import HomePage from "pages/homepage/homepage";
import ShopPage from "pages/shop/shop";
import Login from "pages/login-register/login";
import Register from "pages/login-register/register";
import Checkout from "pages/checkout/checkout";
import ContactUs from "pages/contact-us/contact-us";
import Header from "components/header/header";
import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }

      setCurrentUser(userAuth);

      addCollectionAndDocuments(
        "collections",
        collectionArray.map(({ title, items }) => ({ title, items }))
      );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
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
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
