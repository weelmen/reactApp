import React, { useState } from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./style";
import { ActivityIndicator, ScrollView, Keyboard, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';


import ButtonsGroup from "../components/ButtonsGroup";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4",
    title: "All",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  ,
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f632",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d723",
    title: "Third Item",
  },
];


const TestScreen = ({ navigation }) => {


  return (
    <View style={{ backgroundColor: 'green', flex: 1 }}>
     
        <View style={{  backgroundColor: 'white', flex: 1 }}>
        <Text>132123</Text>
        </View>
      
      <View style={{ position: 'absolute', alignSelf: 'center',backgroundColor:'rgba(0,0,0, 0.3)' }}>
        <Text>wait ...</Text>
        <ActivityIndicator size="large" color="blue" />
      </View>
    </View>
  );



}

export default TestScreen;