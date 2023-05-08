import React, { useState, createContext } from "react";

export const CartContext = createContext({
  items: [],
  setItems: () => [],
});

const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const values = {
    items,
    setItems,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
