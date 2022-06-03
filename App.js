
 import React from 'react';
 import {StyleSheet, Text, View} from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 import 'react-native-gesture-handler';
 
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
         <Stack.Navigator initialRouteName="Delivery Accept Screen">
           <Stack.Screen name="Sign In" component={LoginScreen} options={{headerShown: false}} />
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
           <Stack.Screen name="Test Screen" component={TestScreen} />
         </Stack.Navigator>
       </NavigationContainer>
    
   );
 };
 
 export default App;


/*
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

*/
