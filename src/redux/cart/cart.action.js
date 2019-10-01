import ActionType from "redux/cart/cart.types";

export const toggleCartHidden = () => ({
  type: ActionType.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: ActionType.ADD_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: ActionType.CLEAR_ITEM,
  payload: item
});

export const deleteItem = item => ({
  type: ActionType.DELETE_ITEM,
  payload: item
});

export const clearCartItem = () => ({
  type: ActionType.CLEAR_CART
});
