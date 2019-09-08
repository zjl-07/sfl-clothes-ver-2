import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "pages/homepage";
import ShopPage from "pages/shop";
import Login from "pages/login";
import Register from "pages/register";
import Header from "components/header";
import "styles/main.scss";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
