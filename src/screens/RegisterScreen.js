import React, { useState } from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';
//import useState from "react";  
import styles from "./style";
import { Keyboard, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon, Divider } from 'react-native-elements';
import Logo from '../components/Logo'
import NavBar from '../components/Navbar';
import { Formik, ErrorMessage } from 'formik'
//import ValidationComponent from 'react-native-form-validator';




const RegisterScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [keyCodeStatus, setKeyCodeStatus] = useState('key code is invalid !')
  return (

    <Formik
      initialValues={{ keyCode: '' }}
      onSubmit={() => navigation.navigate('Sign Up2')}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <KeyboardAvoidingView style={styles.containerView} behavior="height">

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={styles.loginScreenContainer}>

              <Logo />
              <Text style={styles.logoText}>Sign up</Text>
              <Text style={{
                color: 'black',
                borderRadius: 5,
                backgroundColor: 'transparent',
                fontSize: 20,
                fontWeight: "500",
                //  paddingTop: 100,
                marginTop: 10,
                marginBottom: 20,
                textAlign: 'center',
              }}>
                Enter your access key</Text>
              <View style={styles.loginFormView}>

                <Text style={styles.validation}>{values.keyCode != '' ? '' : 'key code is invalid !'}</Text>

                <View style={styles.inputContainer}>

                  <View style={{
                    flexGrow: 0,
                    flexShrink: 1,
                    flexBasis: 30,
                    /*flex: 1*/
}}>
                    <Icon
                      style={{ borderColor: "white" }}
                      name='key'
                      type='material-community'
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
                      placeholder="  key code"
                      placeholderColor="#c4c3cb"
                      onChangeText={handleChange('keyCode')}
                      onBlur={handleBlur('keyCode')}
                      value={values.keyCode} />
                  </View>

                </View>

                <Button
                  buttonStyle={styles.loginButton}
                  onPress={handleSubmit}

                  title="Continue"
                />
                <Text style={styles.smallText2}>You have an account ?
                  <Text style={styles.resetText} onPress={() => navigation.navigate('Sign Up')}>  Sign In</Text>
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      )}
    </Formik>

  );
}



export default RegisterScreen;
