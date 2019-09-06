import React from "react";
import HomePage from "pages/homepage";
import HatsPage from "pages/hatspage";
import { Route } from "react-router-dom";
import "styles/main.scss";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
