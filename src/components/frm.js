import React from 'react';
import { Text,Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import {Validate} from './validator';

export const MyReactNativeForm = props => (
 
    <Formik
    initialValues={{ email: '' }}
    onSubmit={values => console.log(values)}
   
  >
      
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          
        />
        
        <Button onPress={handleSubmit} title="Submit" />
        
        
      </View>
    )}
  </Formik>
  
);
