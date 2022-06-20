import React, { useState } from "react";

import styles from "./style";
import { Pressable,  Keyboard/*, Image*/, Text, View, TextInput, TouchableWithoutFeedback/*, Alert,*/, KeyboardAvoidingView } from 'react-native';
import { Button, Icon, Divider } from 'react-native-elements';

import Logo from '../components/Logo';
//import NavBar from '../components/Navbar';
import { Formik } from 'formik';




const LoginScreen = ({ navigation }) => {
  const [texts, setTexts] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  return (

    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <KeyboardAvoidingView style={styles.containerView} behavior="height">

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={styles.loginScreenContainer}>
              <Logo />
              <Text style={styles.logoText}>Sign in</Text>

              <View style={styles.loginFormView}>


                <View >
                  {values.username == '' ? (
                    <Text style={styles.validation}>{values.username != '' ? '' : 'Please enter the UserName !'}</Text>) : null}
                </View>
                <View style={styles.inputContainer}>
                  <View style={{
                    flexGrow: 0,
                    flexShrink: 1,
                    flexBasis: 30,
                    /*flex: 1*/
}}>
                    <Icon
                      style={{ borderColor: "white" }}
                      name='user'
                      type='feather'
                      size={20}
                      color={'#abada9'}
                    />
                  </View>
                  <View style={styles.vertical}>
                    <Divider orientation="vertical" width={1} />
                  </View>
                  <View style={{
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: 0,
                    /*flex: 2*/
}}>

                    <TextInput style={styles.Input}
                      placeholder="  First name"
                      placeholderColor="#c4c3cb"
                      onChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                      value={values.username}

                    />

                  </View>



                </View>
                <View >
                  {values.password == '' ? (
                    <Text style={styles.validation}>{values.password != '' ? '' : 'Please enter the password !'}</Text>) : null}
                </View>
                <View style={styles.inputContainer}>

                  <View style={{
                    flexGrow: 0,
                    flexShrink: 1,
                    flexBasis: 30,
                    /*flex: 1*/
}}>
                    <Icon
                      style={{}}
                      name='lock'
                      type='evilicon'
                      size={30}
                      color={'#abada9'}
                    />
                  </View>
                  <View style={styles.vertical}>
                    <Divider orientation="vertical" width={1} />
                  </View>
                  <View style={{
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: 100,
                    /*flex: 2*/
}}>
                    <TextInput
                      style={styles.Input}
                      placeholder='  Password'
                      placeholderTextColor='#c4c3cb'
                      secureTextEntry={!showLoginPassword}
                      textContentType='password'
                      returnKeyType='done'
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                  </View>
                  <View style={{
                    flexGrow: 0,
                    flexShrink: 1,
                    flexBasis: 30,
                /*flexWrap: "wrap-reverse",
              flex: 3*/}}>
                    <Pressable
                      style={{

                      }}
                      onPress={() => {
                        setShowLoginPassword(!showLoginPassword);
                      }}
                    >
                      <Icon
                        style={{

                        }}
                        name='eye'
                        type='font-awesome'
                        size={20}
                        color={'#abada9'}
                      />


                    </Pressable>
                  </View>

                </View>


                <Text style={styles.smallText}>Forget Password ?
                  <Text style={styles.resetText} onPress={() => this.onLoginPress()}>  Reset</Text>
                </Text>

                <Button
                  buttonStyle={styles.loginButton}
                  onPress={()=>{handleSubmit;
                    navigation.navigate('Restaurants Screen');
                  }}
                  title="Sign In"
                />
                <Text style={styles.smallText2}>You don't have an account ?
                  <Text style={styles.resetText} onPress={() => navigation.navigate('Sign Up')}>  Sign Up</Text>
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
}



export default LoginScreen;
