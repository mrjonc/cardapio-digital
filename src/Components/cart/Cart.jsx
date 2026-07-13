import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("cartMenu");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartMenu", JSON.stringify(cart));
  }, [cart]);

  const addToCard = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <cartContext.Provider value={{ cart, addToCard, cartCount }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
