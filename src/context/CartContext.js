import { useState, createContext } from 'react';

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  total: 0,
  updateTotal: () => {}
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, {...item, quantity}]);
    } else {
      console.log('El producto ya fue agregado');
    } 
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId);
  };

  const updateTotal = () => {
    const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    return total;
  };

  const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, updateTotal }}>
      {children}
    </CartContext.Provider>
  );
};
