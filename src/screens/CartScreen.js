import React, { useState, useEffect } from "react";
import { ScrollView, Pressable, Keyboard, StyleSheet, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';
import { SearchBar, Button, Divider, Card } from 'react-native-elements';

import { fakecartdata_test } from '../api-json-server/fakedata.json';
import Logo1 from "../icons/autocode.svg";
import CartsCard from "../components/CartsCard"



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
const CartScreen = ({ navigation }) => {


    /* load("test1")*/

    return (

        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>

            <ScrollView style={{ backgroundColor: '#fcfcfc', flex: 1, }} >
                <View
                    style={{}}
                >
                    {fakecartdata_test.map((item,i) => {
                        return (

                            <CartsCard
                                data={item}
                                imagesrc="https://logowik.com/content/uploads/images/vector-triangle-logo-mark9022.jpg"
                                company_Name={item.company_Name}
                                agent_Name={item.agent_Name}
                                workingTime='8 February 2022  .13:36'
                                restaurant_name={item.restaurant_name}
                                navigations={navigation}
                            />


                        );
                    })}


                </View>


            </ScrollView>


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
export default CartScreen;


