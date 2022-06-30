import React, { useContext, useState } from 'react';

import App from './App';
import CartState from './src/store/Context/cart/CartState';

//import CartContext from './src/store/Context/cart/CartContext';



const StateProvider = () => {
	//const store = { ...CounterState(), ...UserState() };

	return (
     <CartState>
		 
			<App/> 
			
			
				
	     
		
		 
		  
    </CartState>
	
	);
};

export default StateProvider;