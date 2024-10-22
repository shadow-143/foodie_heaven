import { createContext, useState, useEffect } from 'react';
import { food } from "./data/data";

const CartContext = createContext();
    
export function CartProvider({ children }) {
  const [items, setItems] = useState([]); 
  const oldCartData = localStorage.getItem('oldcart');

  
  useEffect(()=> {
    if(oldCartData){
      setItems(JSON.parse(oldCartData));
    }
    // eslint-disable-next-line
  },[])

  const addToCart = (id) => {
    setItems((prevState) => [...prevState, { id }]);
    
    const updatedCart = oldCartData ? [...JSON.parse(oldCartData), { id }] : [{ id }];
    localStorage.setItem('oldcart', JSON.stringify(updatedCart));
  };
  

  const removeFromCart = (id) => {
    setItems((prevState) => prevState.filter(item => item.id !== id));
  
   
    if (oldCartData) {
      const updatedCart = JSON.parse(oldCartData).filter(item => item.id !== id);
      localStorage.setItem('oldcart', JSON.stringify(updatedCart));
    }
  };
  const clearCart = () => {
    setItems([]);
  };

  const getCartItemDetails = () => {
    const groupedItems = {};

    
    if (oldCartData) {
      const oldStorageCartItems = JSON.parse(oldCartData);
      oldStorageCartItems.forEach((item) => {
        const itemId = item.id;
        if (groupedItems[itemId]) {
          groupedItems[itemId].quantity += 1;
        } else {
          const cartItem = food.find((foodItem) => foodItem.id === itemId);
          groupedItems[itemId] = {
            ...cartItem,
            quantity: 1,
          };
        }
      });
    } else {
      
      items.forEach((item) => {
        const itemId = item.id;
        if (groupedItems[itemId]) {
          groupedItems[itemId].quantity += 1;
        } else {
          const cartItem = food.find((foodItem) => foodItem.id === itemId);
          groupedItems[itemId] = {
            ...cartItem,
            quantity: 1,
          };
        }
      });
  
      
      const cartItems = Object.values(groupedItems);
      localStorage.setItem('oldcart', JSON.stringify(cartItems));
    }
  
    
    const cartItems = Object.values(groupedItems);
  
    return cartItems;
  };
  
  

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, getCartItemDetails, clearCart }}>{children}</CartContext.Provider>
  );
}

export default CartContext;
