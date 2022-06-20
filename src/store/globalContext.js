import { createContext, useState } from "react";


const initialState = {
  Profile :  {id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  name: "abderrahim",
  cart: 250,
  profileimg:'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427'}
}
export const GlobalContext = createContext(initialState);

export default function GlobalContextProvider({ children }) {
  let [store, setStore] = useState(initialState);

  function dispatch(obj) {
    setStore(obj);
  }

  return (
    <GlobalContext.Provider value={{profile : store, dispatch}}>{children}</GlobalContext.Provider>
  );
}