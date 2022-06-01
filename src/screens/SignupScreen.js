import React, { useState } from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./style";
import { Keyboard, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView } from 'react-native';
import { Button, Icon, Divider } from 'react-native-elements';
import Logo from '../components/Logo'
import { Formik } from 'formik';




const SignupScreen = ({ navigation }) => {
    const [texts, setTexts] = useState('');


    return (

        <Formik
            initialValues={{ firstname: '', lastname: '', country: '' , birthday: ''}}
            onSubmit={() => navigation.navigate('Sign Up3')}
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
                                Set up your profile</Text>
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
                                    {values.username == '' ? (
                                        <Text style={styles.validation}>{values.lastname != '' ? '' : 'Please enter the LastName !'}</Text>) : null}
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
                                            placeholder="  Last name"
                                            placeholderColor="#c4c3cb"
                                            onChangeText={handleChange('lastname')}
                                            onBlur={handleBlur('lastname')}
                                            value={values.lastname}

                                        />
                                    </View>
                                </View>
                                <View >
                                    {values.username == '' ? (
                                        <Text style={styles.validation}>{values.country != '' ? '' : 'Please enter the country !'}</Text>) : null}
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
                                            name='flag'
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
                                            placeholder="  Country"
                                            placeholderColor="#c4c3cb"
                                            onChangeText={handleChange('country')}
                                            onBlur={handleBlur('country')}
                                            value={values.country}

                                        />
                                    </View>
                                </View>
                                <View >
                                    {values.username == '' ? (
                                        <Text style={styles.validation}>{values.birthday != '' ? '' : 'Please enter the Birthday !'}</Text>) : null}
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
                                            name='calendar'
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
                                            placeholder="  Birthday"
                                            placeholderColor="#c4c3cb"
                                            onChangeText={handleChange('birthday')}
                                            onBlur={handleBlur('birthday')}
                                            value={values.birthday}

                                        />
                                    </View>
                                </View>


                                <Button
                                    buttonStyle={styles.loginButton}
                                    onPress={handleSubmit}
                                    title="Continue"
                                />
                                <Text style={styles.smallText2}>You don't have an account ?
                                    <Text style={styles.resetText} onPress={() => navigation.navigate('Sign Up')}>  Sign in</Text>
                                </Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            )}
        </Formik>
    );
}



export default SignupScreen;
