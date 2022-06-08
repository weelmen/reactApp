import React, { useState, useEffect } from "react";
import { ScrollView, Pressable, Keyboard, StyleSheet, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';
import { ButtonGroup, Icon, SearchBar, Button, Divider, Card } from 'react-native-elements';
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
    const [mode, setMode] = useState('');
    const [test, setTest] = useState("NO");
    const [selectedDownerIndex, setSelectedDownerIndex] = useState(0);
    const [card, setCard] = useState(0);
    const component1 = () =>
       
            <Icon name="home" type='font-awesome-5' color={selectedDownerIndex === 0 ? '#6256fb' : '#e5e5e5'} />
        
    const component2 = () =>
        /*<Pressable
            onPress={() => navigation.navigate('Delivery History Screen')}>*/
            <View>
            <Icon name="history" type='material' size={28} color={selectedDownerIndex === 1 ? '#6256fb' : '#e5e5e5'} />
            <View style={{ position: 'absolute',/* flexDirection:'column'*/ }}>
                {card != 0 ? <View style={{
                    //  alignItems: 'flex-start',
                    // alignContent:'flex-start',
                    height: 17,
                    width: 17,
                    borderRadius: 30,
                    borderColor: '#6256fb',
                    borderWidth: 1,
                    // alignSelf: 'flex-start',
                    marginTop: -5,

                    backgroundColor: 'white',
                    /* position: 'absolute'*/
                }}><Text style={{ fontSize: 15, alignSelf: 'center', marginTop: -3 }}>{card}</Text>

                </View> : <View></View>}


            </View>
        </View>
        ;


    return (

        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <View style={{ height: '8%' }}>
                <NavBar />

            </View>
            <ScrollView style={{ backgroundColor: '#fcfcfc', flex: 1, }} >



                <View
                    style={{}}
                >
                    <DeliveryCard onPressDelete={() => setTest("Delete")} onPressConfirm={() => navigation.navigate('Delivery Accept Screen')} mode={selectedDownerIndex}  />
                    <DeliveryCard onPressDelete={() => setTest("Delete")} onPressConfirm={() => navigation.navigate('Delivery Accept Screen')}mode={selectedDownerIndex}  />
                    <DeliveryCard onPressDelete={() => setTest("Delete")} onPressConfirm={() => navigation.navigate('Delivery Accept Screen')} mode={selectedDownerIndex} />
                    <DeliveryCard onPressDelete={() => setTest("Delete")} onPressConfirm={() => navigation.navigate('Delivery Accept Screen')}  mode={selectedDownerIndex}/>
                    <DeliveryCard onPressDelete={() => setTest("Delete")} onPressConfirm={() => navigation.navigate('Delivery Accept Screen')} mode={selectedDownerIndex} />
                    <DeliveryCard onPressDelete={() => setTest("Delete")} onPressConfirm={() => navigation.navigate('Delivery Accept Screen')} mode={selectedDownerIndex} />
                    <DeliveryCard onPressDelete={() => setTest("Delete")} onPressConfirm={() => navigation.navigate('Delivery Accept Screen')} mode={selectedDownerIndex} />
                    <DeliveryCard onPressDelete={() => setTest("Delete")} onPressConfirm={() => navigation.navigate('Delivery Accept Screen')} mode={selectedDownerIndex} />



                </View>





            </ScrollView>

            <View style={{ backgroundColor: 'white', height: 40 }}>
                <ButtonGroup

                    buttonContainerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', justifyContent: 'center', flexDirection: 'row', maxWidth: '38%' }}
                    selectedButtonStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    selectedTextStyle={{ color: '#ffa457' }}
                    buttons={[{ element: component1 }, { element: component2 }]}
                    selectedIndex={selectedDownerIndex}
                    onPress={(value) => {
                        setSelectedDownerIndex(value);
                    }}
                    textStyle={{ fontSize: 14 }}
                    containerStyle={{ borderColor: 'transparent', marginBottom: 0, justifyContent: 'center', flexDirection: 'row', }}
                />
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