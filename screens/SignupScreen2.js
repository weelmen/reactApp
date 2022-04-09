import React, { useState } from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./style";
import { Keyboard, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView } from 'react-native';
import { Button, Icon, Divider } from 'react-native-elements';
import Logo from '../components/Logo'
import { Formik } from 'formik';




const SignupScreen2 = ({ navigation }) => {
    const [texts, setTexts] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showRewritePassword, setShowRewritePassword] = useState(false);

    return (

        <Formik
            initialValues={{ password: '', rewritepassword: '' }}
            onSubmit={() => navigation.navigate('Menu Screen')}
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
                                Set up your password</Text>
                            <View style={styles.loginFormView}>


                         
                                <View >
                                    {values.password == '' ? (
                                        <Text style={styles.validation}>{values.password != '' ? '' : 'Please enter your password !'}</Text>) : null}
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
                                            secureTextEntry={!showPassword}
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
                                        <TouchableOpacity
                                            style={{

                                            }}
                                            onPress={() => {
                                                setShowPassword(!showPassword);
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


                                        </TouchableOpacity>
                                    </View>

                                </View>
 
                                <View >
                                    {values.password != values.rewritepassword ? (
                                        <Text style={styles.validation}>{values.password == values.rewritepassword ? '' : 'Wrong password !'}</Text>) : null}
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
                                            placeholder='  rewritepassword'
                                            placeholderTextColor='#c4c3cb'
                                            secureTextEntry={!showRewritePassword}
                                            textContentType='rewritepassword'
                                            returnKeyType='done'
                                            onChangeText={handleChange('rewritepassword')}
                                            onBlur={handleBlur('rewritepassword')}
                                            value={values.rewritepassword}
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
                                                setShowRewritePassword(!showRewritePassword);
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


                                        </TouchableOpacity>
                                    </View>

                                </View>




                                

                                <Button
                                    buttonStyle={styles.loginButton}
                                    onPress={handleSubmit}
                                    title="Continue"
                                />
                                <Text style={styles.smallText2}>You have an account ?
                                    <Text style={styles.resetText} onPress={() => navigation.navigate('Sign In')}>  Sign in</Text>
                                </Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            )}
        </Formik>
    );
}



export default SignupScreen2;
