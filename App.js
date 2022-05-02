
 import React from 'react';
 import {StyleSheet, Text, View} from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 import 'react-native-gesture-handler';
 
 import LoginScreen from './screens/LoginScreen';
 import RegisterScreen from './screens/RegisterScreen';
 import SignupScreen from './screens/SignupScreen';
 import SignupScreen2 from './screens/SignupScreen2';
 import RestaurantsScreen from './screens/RestaurantsScreen';
 import MenusScreen from './screens/MenusScreen'
 import FoodChoiceScreen from './screens/FoodChoiceScreen';
 import CartScreen from './screens/CartScreen';
 import ConfirmOrderScreen from './screens/ConfirmOrderScreen';
 const Stack = createStackNavigator();
 const App = () => {
   return (
     
       <NavigationContainer>
         <Stack.Navigator initialRouteName="Confirm Order Screen">
           <Stack.Screen name="Sign In" component={LoginScreen} />
           <Stack.Screen name="Sign Up" component={RegisterScreen} />
           <Stack.Screen name="Sign Up2" component={SignupScreen} />
           <Stack.Screen name="Sign Up3" component={SignupScreen2} />
           <Stack.Screen name="Restaurants Screen" component={RestaurantsScreen} />
           <Stack.Screen name="Menus Screen" component={MenusScreen} />
           <Stack.Screen name="Choice Screen" component={FoodChoiceScreen} />
           <Stack.Screen name="Cart Screen" component={CartScreen} />
           <Stack.Screen name="Confirm Order Screen" component={ConfirmOrderScreen} />
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
