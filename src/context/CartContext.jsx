import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure styles are applied

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      return Array.isArray(storedCart) ? storedCart : [];
    } catch {
      return [];
    }
  });

  // ✅ Persist cart in localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Add item to cart (Ensures correct state updates)
  const addToCart = (item) => {
    setCartItems(prev => {      
      const exists = prev.some(i => i.id === item.id);
      if (exists) {
        toast.warning(`${item.title} is already in the cart!`, { position: "top-right" });
        return prev;
      } else {
        toast.success(`${item.title} added to cart!`, { position: "top-right" });
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  // ✅ Remove item from cart
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast.success("Item removed from cart!", { position: "top-right" });
  };

  // ✅ Update item quantity in cart
  const updateCartQuantity = (id, quantity) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
