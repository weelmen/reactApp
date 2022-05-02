import React, { useState, useEffect } from "react";
import { ScrollView, Pressable, Keyboard, StyleSheet, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';
import { SearchBar, Button, Divider, Card } from 'react-native-elements';

import { fakecartdata_test } from '../api-json-server/fakedata.json';
import Logo1 from "../icons/autocode.svg";
import CartsCard from "../components/CartsCard"
import MapView from 'react-native-maps';



/*
async function load(name) {
    let say = await name!="";
    say.test=()=>{import("../icons/autocode.svg")};
    say.ImportedIconRef = (
        await import(`../icons/test1.svg`)
      ).ReactComponent;
    
    
}*/
/*const importIcon =  (path) => {
    
    if(true)
    {
        import Logo2 from "../icons/autocode.svg";

    }

}*/
const ConfirmOrderScreen = ({ navigation }) => {


    /* load("test1")*/

    return (

        <View style={{ backgroundColor: '#fcfcfc', flex: 1, padding: '5%' }}>


            <View
                style={{ backgroundColor: '#f5f5f5', height: '30%' }}
            >
                <Text
                    style={{ margin: 10, alignSelf: 'center', color: '#6357ff', fontWeight: '500', fontSize: 16 }}
                >Add note for the chef ? *</Text>
                <View
                    style={{ backgroundColor: '#f0f0f0', height: '60%', margin: '5%' }}
                >
                    <TextInput
                        style={{ alignSelf: 'center' }}
                        placeholder='Write your note here...'
                        placeholderTextColor='#c4c3cb'
                    >
                    </TextInput>




                </View>






            </View>
            <View
                style={{ backgroundColor: '#f5f5f5', height: '60%' ,marginTop:'5%'}}
            >
              



            






            </View>




        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',


    },
    image: {
        width: '100%',
        height: 120,
        //borderRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 0,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
    },
    title: {


        color: '#6357ff',
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 5,
        marginTop: 0,







        //  paddingTop: 100,

    },

    text: {


        color: '#4e4e4e',
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 5,
        marginTop: 0,







        //  paddingTop: 100,

    },
    cardcontainent: {
        flexDirection: 'row',
        flex: 1

    }
});
export default ConfirmOrderScreen;


