import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <CartContext.Provider value={[count, setCount]}>
      {props.children}
    </CartContext.Provider>
  );
};
