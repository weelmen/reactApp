import React, { useState, useEffect } from "react";
import { ScrollView, Pressable, Keyboard, StyleSheet, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';
import { SearchBar, Button, Divider, Card } from 'react-native-elements';

import { fakecartdata_test } from '../api-json-server/fakedata.json';
//import Logo1 from "../icons/autocode.svg";
import CartsCard from "../components/CartsCard";
import Navigation from "../components/Navigation";
import DeliveryCard from "../components/DeliveryCard"



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



const OrderNumberScreen = ({ navigation, price }) => {
    const [data, setData] = useState();




    return (

        <View style={{ backgroundColor: '#f5f5f5', flex: 1 }}>
            <View style={{ height: '8%' }}>
                <Navigation 
                    screenName={'Order Number'}
                    onPress={()=>navigation.navigate('Cart Screen')}
                />

            </View>



            <ScrollView style={{ backgroundColor: 'white', flex: 1, }} >



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
                                    Hidedetails
                                    ShowPriceDetails={[true, GetTotalPrice(item.items)]}
                                  //  navigations={navigation}
                                    mode={'client'}

                                />





                            </View>

                        );



                    })}



                </View>





            </ScrollView>


        </View>


    );

}

const styles = StyleSheet.create({

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