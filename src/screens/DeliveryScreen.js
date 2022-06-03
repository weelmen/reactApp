import React, { useState, useEffect } from "react";
import { ScrollView, Pressable, Keyboard, StyleSheet, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';
import { SearchBar, Button, Divider, Card } from 'react-native-elements';
import { fakecartdata_test } from '../api-json-server/fakedata.json';
import CartsCard from "../components/CartsCard";
import DeliveryCard from "../components/DeliveryCard"
import NavBar from "../components/Navbar";


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


const DeliveryScreen = ({ navigation, price }) => {
    const [data, setData] = useState();
    const [test, setTest] = useState("NO");



    return (

        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
<View style={{height:'8%'}}>
            <NavBar />

</View>
            <ScrollView style={{ backgroundColor: '#fcfcfc', flex: 1, }} >



                <View
                    style={{}}
                >
                    <DeliveryCard onPressDelete={() => setTest("Delete")} onPressConfirm={() => setTest("Confirm")} />
                    <DeliveryCard onPressDelete={() => setTest("Delete")} onPressConfirm={() => setTest("Confirm")} />
                    <DeliveryCard onPressDelete={() => setTest("Delete")} onPressConfirm={() => setTest("Confirm")} />
                    <DeliveryCard onPressDelete={() => setTest("Delete")} onPressConfirm={() => setTest("Confirm")} />
                    <DeliveryCard onPressDelete={() => setTest("Delete")} onPressConfirm={() => setTest("Confirm")} />
                    <DeliveryCard onPressDelete={() => setTest("Delete")} onPressConfirm={() => setTest("Confirm")} />
                    <DeliveryCard onPressDelete={() => setTest("Delete")} onPressConfirm={() => setTest("Confirm")} />
                    <DeliveryCard onPressDelete={() => setTest("Delete")} onPressConfirm={() => setTest("Confirm")} />



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
export default DeliveryScreen;