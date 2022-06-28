/*import React,{ useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import {ADD_TO_CART,REMOVE_FROM_CART} from "../Types";


const CartState = ({ children }) => {
    const initalState = {
      cartItems: ['test1','test2'],
    };
  
    const [state, dispatch] = useReducer(CartReducer, initalState);
  
    const addToCart = (item) => {
      dispatch({ type: ADD_TO_CART, payload: item });
    };
  
    const removeFromCart = (id) => {
      dispatch({ type: REMOVE_FROM_CART, payload: id });
    };
  
    return (
      <CartContext.Provider
        value={{
          cartItems: state.cartItems,
          addToCart,
          removeFromCart,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
  
  export default CartState;*/

  import React, { useState, useReducer } from "react";

import CartContext from "./CartContext";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./CartReducer";

const CartState = props => {
  const products = [
    /*{ id: "p1", title: "chakchouka", price: 29.99 },
    { id: "p2", title: "mlawi", price: 9.99 },
    { id: "p3", title: "fricasse", price: 0.99 },
    { id: "p4", title: "tonn", price: 2.99 }*/
  ];
 // const loading =false;
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });
  const [loading,setLoading]=useState(false)
  const addProductToCart = product => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 200);
  };

  const removeProductFromCart = productId => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };
  const Loading = (state) => {
    setTimeout(() => {
      // setCart(updatedCart);
      setLoading(state);
    }, 2000);
  };
  return (
    <CartContext.Provider
      value={{
        products: products,
        loading:loading,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        Loading: Loading
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;