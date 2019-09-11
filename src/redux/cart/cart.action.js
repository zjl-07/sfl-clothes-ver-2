import ActionType from "redux/cart/cart.types";

export const toggleCartHidden = () => ({
  type: ActionType.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: ActionType.ADD_ITEM,
  payload: item
});
