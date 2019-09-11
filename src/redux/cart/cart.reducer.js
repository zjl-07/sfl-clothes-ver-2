import ActionType from "redux/cart/cart.types";
import { addItemToCart } from "redux/cart/cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};
