import React from "react";

const CartContext = React.createContext({
  cartList: [],
  addToCart: () => {},
  deleteFromCart: () => {},
});

export default CartContext;
