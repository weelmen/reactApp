
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import SignupScreen from './src/screens/SignupScreen';
import SignupScreen2 from './src/screens/SignupScreen2';
import RestaurantsScreen from './src/screens/RestaurantsScreen';
import MenusScreen from './src/screens/MenusScreen'
import FoodChoiceScreen from './src/screens/FoodChoiceScreen';
import CartScreen from './src/screens/CartScreen';
import ConfirmOrderScreen from './src/screens/ConfirmOrderScreen';
import ConfirmOrderScreen1 from './src/screens/ConfirmOrderScreen1';
import OrderNumberScreen from './src/screens/OrderNumberScreen';
import DeliveryScreen from './src/screens/DeliveryScreen';
import DeliveryAcceptScreen from './src/screens/DeliveryAcceptOrderScreen';
import TestScreen from './src/screens/TestScreen';

const Stack = createStackNavigator();
const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Delivery Screen">
        <Stack.Screen name="Sign In" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Sign Up" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Sign Up2" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Sign Up3" component={SignupScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Restaurants Screen" component={RestaurantsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Menus Screen" component={MenusScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Choice Screen" component={FoodChoiceScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cart Screen" component={CartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Confirm Order Screen" component={ConfirmOrderScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Confirm Order Screen 1" component={ConfirmOrderScreen1} options={{ headerShown: false }} />
        <Stack.Screen name="Order Number Screen" component={OrderNumberScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Delivery Screen" component={DeliveryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Delivery Accept Screen" component={DeliveryAcceptScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Test Screen" component={TestScreen} />

      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;


/*<Stack.Screen name="Sign In" component={LoginScreen} options={{headerShown: false}} />
           <Stack.Screen name="Sign Up" component={RegisterScreen} options={{headerShown: false}}/>
           <Stack.Screen name="Sign Up2" component={SignupScreen} options={{headerShown: false}}/>
           <Stack.Screen name="Sign Up3" component={SignupScreen2} options={{headerShown: false}}/>
           <Stack.Screen name="Restaurants Screen" component={RestaurantsScreen} options={{headerShown: false}}/>
           <Stack.Screen name="Menus Screen" component={MenusScreen} options={{headerShown: false}}/>
           <Stack.Screen name="Choice Screen" component={FoodChoiceScreen} options={{headerShown: false}}/>
           <Stack.Screen name="Cart Screen" component={CartScreen} options={{headerShown: false}}/>
           <Stack.Screen name="Confirm Order Screen" component={ConfirmOrderScreen} options={{headerShown: false}}/>
           <Stack.Screen name="Confirm Order Screen 1" component={ConfirmOrderScreen1} options={{headerShown: false}}/>
           <Stack.Screen name="Order Number Screen" component={OrderNumberScreen} options={{headerShown: false}}/>
           <Stack.Screen name="Delivery Screen" component={DeliveryScreen} options={{headerShown: false}}/>
           <Stack.Screen name="Delivery Accept Screen" component={DeliveryAcceptScreen} options={{headerShown: false}}/>
           <Stack.Screen name="Test Screen" component={TestScreen} /> */