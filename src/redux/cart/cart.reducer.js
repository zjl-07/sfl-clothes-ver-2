import ActionType from "redux/cart/cart.types";
import { addItemToCart, deleteItem } from "redux/cart/cart.utils";

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
    case ActionType.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      };
    case ActionType.DELETE_ITEM:
      return {
        ...state,
        cartItems: deleteItem(state.cartItems, action.payload)
      };
    case ActionType.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};
