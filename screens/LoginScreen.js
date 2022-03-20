import React, { useState } from "react";
import {TouchableOpacity} from 'react-native-gesture-handler';
//import useState from "react";
//import PasswordInputText from 'react-native-hide-show-password-input';
import styles from "./style";
import {Keyboard, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import { Icon , Divider } from 'react-native-elements';
import Logo from '../components/Logo'

import { Item } from "react-native-paper/lib/typescript/components/List/List";

const LoginScreen = () => {
  const [text, setText] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(true);

    return (

      
        <KeyboardAvoidingView style={styles.containerView} behavior="height">
              
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          
          <View style={styles.loginScreenContainer}>
           
      
            <View style={styles.loginFormView}>
            <Logo />
            
            <View style={styles.inputContainer}>
            <View style={{
                flexGrow: 0,
                flexShrink: 1,
                flexBasis: 30,
                /*flex: 1*/}}>
                  <Icon
                    style={{borderColor:"white"}}
                    name='compass'
                    type='Feather'
                    size={22}
                    color={'#abada9'}
                  />
              </View>
              <View style={styles.vertical}>
              <Divider orientation="vertical" width={1}/>
              </View>
              <View style={{
                flexGrow: 1,
                flexShrink: 0,
                flexBasis: 0,
                /*flex: 2*/}}>
              
              <TextInput  style={styles.Input}  placeholder="Username" placeholderColor="#c4c3cb"  />
              </View>
           
           
           
            </View>

            <View style={styles.inputContainer}>
              <View style={{
                flexGrow: 0,
                flexShrink: 1,
                flexBasis: 30,
                /*flex: 1*/}}>
                  <Icon
                    style={{}}
                    name='lock'
                    type='SimpleLineIcons'
                    size={22}
                    color={'#abada9'}
                  />
              </View>
              <View style={styles.vertical}>
              <Divider orientation="vertical" width={1}/>
              </View>
              <View style={{
                flexGrow: 1,
                flexShrink: 0,
                flexBasis: 100,
                /*flex: 2*/}}>
                  <TextInput
                    style={styles.Input}
                    placeholder='Password'
                    placeholderTextColor='#c4c3cb'
                    secureTextEntry={!showLoginPassword}
                    textContentType='password'
                    returnKeyType='done'
                  />
              </View>
              <View style={{
                flexGrow: 0,
                flexShrink: 1,
                flexBasis: 30,
                /*flexWrap: "wrap-reverse",
              flex: 3*/}}>
                  <TouchableOpacity
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
                      size={22}
                      color={'#abada9'}
                    />      
              
              
              </TouchableOpacity>
            </View>

            </View>
                  

                <Text style={styles.smallText}>Forget Password ?
                <Text style={styles.resetText}  onPress={() => this.onLoginPress()}>  Reset</Text>
                </Text>
               
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.onLoginPress()}
                title="Sign In"
              />
              <Text style={styles.smallText2}>You don't have an account ?
                <Text style={styles.resetText}  onPress={() => this.onLoginPress()}>  Sign Up</Text>
                </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      );
    }
  
  

export default LoginScreen;
