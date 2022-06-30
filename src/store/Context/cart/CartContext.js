import React from "react";

export default React.createContext({
    cartItems: [
     
  ],
  loading:false,
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {},
  Loading:state=>{}
});
