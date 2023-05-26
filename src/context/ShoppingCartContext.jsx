import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext({
  cartItems: [],
  cartQuantity: 0,
  getItemQuantity: (value) => {},
  increaseCartQuantity: (value) => {},
  decreaseCartQuantity: (value) => {},
  removeFromCart: (value) => {},
});

const intialCartItems = window.localStorage.getItem("shopping-cart")
  ? JSON.parse(window.localStorage.getItem("shopping-cart"))
  : [];
const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(intialCartItems);

  const savingDataInLocalStorage = () => {
    window.localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
  };

  useEffect(() => {
    savingDataInLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  const cartQuantity = cartItems.reduce((current, item) => {
    return item.quantity + current;
  }, 0);

  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) === 1) {
        return cartItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id) => {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems: cartItems,
        getItemQuantity: getItemQuantity,
        increaseCartQuantity: increaseCartQuantity,
        decreaseCartQuantity: decreaseCartQuantity,
        removeFromCart: removeFromCart,
        cartQuantity: cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
export default ShoppingCartProvider;
