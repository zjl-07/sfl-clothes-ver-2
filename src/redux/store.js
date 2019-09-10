import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import userReducer from "redux/user/user.reducer";
import cartReducer from "redux/cart/cart.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
