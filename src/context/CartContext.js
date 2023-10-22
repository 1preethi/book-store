import React from "react";

const CartContext = React.createContext({
  cartList: [],
  addToCart: () => {},
  deleteFromCart: () => {},
  resetCart: () => {},
});

export default CartContext;
