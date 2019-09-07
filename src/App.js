import React from "react";
import { Route } from "react-router-dom";
import HomePage from "pages/homepage";
import ShopPage from "pages/shoppage";
import "styles/main.scss";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
