import React from "react";

export default React.createContext({
    cartItems: [
     
  ],
  loading:true,
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});
