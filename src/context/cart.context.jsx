import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id;
  });
  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id);
  }
  return [...cartItems, { ...productToAdd }];
};

// Remove
// Clear

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    addItemToCart,
    cartItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
