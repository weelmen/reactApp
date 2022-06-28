import React from 'react';

import App from './App';
import CartContext from './src/store/Context/cart/CartContext';
import CartState from './src/store/Context/cart/CartState';
/*import CounterState from './src/Store/Context/user/CounterState';
import UserState from './src/Store/Context/user/UserState';
import Context from './src/Store/Context/user/Context';*/
/*<Context.Provider/* value={store}>*//*	</Context.Provider>*/
const StateProvider = () => {
	//const store = { ...CounterState(), ...UserState() };

	return (
        <CartState>
		
			<App/>
	
    </CartState>
	);
};

export default StateProvider;