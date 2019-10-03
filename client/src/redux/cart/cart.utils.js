export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItem = cartItems.find(
    cartItems => cartItems.id === cartItemsToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === cartItemsToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const deleteItem = (cartItems, itemToBeDelete) => {
  if (itemToBeDelete.quantity === 1) {
    return cartItems.filter(item => item.id !== itemToBeDelete.id);
  }

  return cartItems.map(item =>
    item.id === itemToBeDelete.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
