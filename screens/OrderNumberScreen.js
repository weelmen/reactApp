import React, { useState, useEffect } from "react";
import { ScrollView, Pressable, Keyboard, StyleSheet, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';
import { SearchBar, Button, Divider, Card } from 'react-native-elements';

import { fakecartdata_test } from '../api-json-server/fakedata.json';
//import Logo1 from "../icons/autocode.svg";
import CartsCard from "../components/CartsCard";
import ConfirmOrderScreen from "./ConfirmOrderScreen";
import { ConfirmButtonCartsCard } from "../components/CartsCard";
import DeliveryCard from "../components/DeliveryCard"
import Drawer from 'react-native-drawer'
import { Swipeable, GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { SwipeItem, SwipeButtonsContainer, SwipeProvider } from 'react-native-swipe-item';


function GetTotalPrice(data) {
    let total = 0;
    data.filter(item => {
        item.price !== 0 ? total = (total + (item.price * item.number)) : NaN
    })
    console.log("total =====", total);
    return (total)
};

function byID(idToSearch) {
    return fakecartdata_test.filter(item => {

        return item.id === idToSearch
        consol.log(item);
    })
};
function onPressFunction(test) {

    console.log("test >>", test);


};


const OrderNumberScreen = ({ navigation, price }) => {
    const [data, setData] = useState();
    const [test, setTest] = useState("NO");


    const rightButton = (

        <SwipeButtonsContainer>
            <View style={{/* flex: 1, flexDirection: 'row',/* backgroundColor: 'red',alignItems:'center'*/ /*height: 100*/ }}
            >
                <View style={{

                    flex: 1,
                    alignContent: 'center',


                       backgroundColor: '#fa7d9b'
                }}
                >
                    <Pressable style={{
                       // backgroundColor: '#ffa457',
                        //   borderRadius: 5,
                        //    height: 45,
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 10,
                    //    backgroundColor: "red"

                    }}>
                        <Text>1</Text>
                    </Pressable>

                </View>
                <View style={{

                    flex: 1,
                    alignContent: 'center',

                       backgroundColor: '#7dff9b'
                }}
                >
                    <Pressable style={{
                      //  backgroundColor: '#ffa457',
                        //    borderRadius: 5,
                        //    height: 45,
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 10,
                    //    backgroundColor:"blue"

                    }} >
                        <Text>2</Text>
                    </Pressable>

                </View>
            </View>


        </SwipeButtonsContainer>
    
    );
    return (

        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>




            <ScrollView style={{ backgroundColor: '#fcfcfc', flex: 1, }} >


                
                <View
                    style={{}}
                >
                    {byID(2).map((item, i) => {
                        () => setData(item);
                        return (
                            <View>
                                <CartsCard
                                    data={item}
                                    imagesrc="https://logowik.com/content/uploads/images/vector-triangle-logo-mark9022.jpg"
                                    company_Name={item.company_Name}
                                    agent_Name={item.agent_Name}
                                    workingTime='8 February 2022  .13:36'
                                    restaurant_name={item.restaurant_name}
                                    Hidedetails={true}
                                    ShowPriceDetails={[true, GetTotalPrice(item.items)]}
                                    navigations={navigation}

                                />





                            </View>

                        );



                    })}










                    <DeliveryCard />
                    <DeliveryCard />
                    <DeliveryCard />


                </View>





            </ScrollView>

            <View style={{ backgroundColor: 'white', height: 40 }}>
                <Text style={{ color: 'red' }}>  {test} Button clicked</Text>
            </View>
        </View>


    );

}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 100,
        // alignSelf: 'center',
        //  marginVertical: 5,
        //flexDirection: 'row',
    }, swipeContentContainerStyle: {
        flex: 1,
        //justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#ffffff',
        // borderRadius: 10,
        // borderColor: '#e3e3e3',
        //borderWidth: 1,
    },
    container: {
        marginTop: 20,
        marginBottom: 20,
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
export default OrderNumberScreen;