import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    alert('Producto agregado al carrito de compras');
  };

  return { cart, dispatch, handleAddToCart };
};

export default CartContext;
