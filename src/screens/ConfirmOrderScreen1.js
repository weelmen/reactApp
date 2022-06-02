import React, { useState, useEffect } from "react";
import { ScrollView, Pressable, Keyboard, StyleSheet, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';
import { SearchBar, Button, Divider, Card } from 'react-native-elements';

import { fakecartdata_test } from '../api-json-server/fakedata.json';
//import Logo1 from "../icons/autocode.svg";
import CartsCard from "../components/CartsCard";
import ConfirmOrderScreen from "./ConfirmOrderScreen";
import{ConfirmButtonCartsCard} from "../components/CartsCard";

//let [confirmON, setConfirmON] = useState(false);
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
/*const ConfirmOFF = (props) => {
    return (

        <View>
            <Button
                buttonStyle={{
                    backgroundColor: '#6357ff',
                    borderRadius: 5,
                    marginTop: '5%',
                    marginLeft: "8%",
                    marginRight: "8%",
                    fontWeight: '400'
                }} title={`Confirm order  (${props.price} TND)`}
                onPress={() => setConfirmON = true}
            />
            <Pressable>
                <Text
                    style={{ alignSelf: 'center', color: "#6357ff", fontSize: 13, marginTop: '3%' }}
                >Cancel order</Text>

            </Pressable>

        </View>


    );

}*/

const ConfirmOrderScreen1 = ({ navigation, price }) => {
    const [data, setData] = useState();

    return (

        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>

            <ScrollView style={{ backgroundColor: '#fcfcfc', flex: 1, }} >
                <View
                    style={{}}
                >
                    {byID(6).map((item, i) => {
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
                                    ShowPriceDetails={[false, ]}
                                    navigations={navigation}
                                />


                                <ConfirmButtonCartsCard
                                    onPressConfirm={()=>onPressFunction("Confirm Order Pressed")}
                                    price={GetTotalPrice(item.items)}
                                    onPressCancel={()=>onPressFunction("Cancel Order Pressed")}
                                />


                            </View>

                        );


                        
                    })}
                    {fakecartdata_test.map((item, i) => {
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
                                    ShowPriceDetails={[false, ]}
                                    navigations={navigation}
                                />




                            </View>

                        );


                        
                    })}


                </View>

            </ScrollView>


        </View>


    );
    consol.log(data);
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
export default ConfirmOrderScreen1;


