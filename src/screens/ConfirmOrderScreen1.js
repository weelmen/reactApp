import React, { useState, useEffect } from "react";
import { ScrollView, Pressable, Keyboard, StyleSheet, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';
import { SearchBar, Button, Divider, Card } from 'react-native-elements';

import { fakecartdata_test } from '../api-json-server/fakedata.json';
//import Logo1 from "../icons/autocode.svg";
import CartsCard from "../components/CartsCard";
import ConfirmOrderScreen from "./ConfirmOrderScreen";
import Navigation from "../components/Navigation";
import { ConfirmButtonCartsCard } from "../components/CartsCard";
import { WaitingCartsCard } from "../components/CartsCard";
import CartContext from "../store/Context/cart/CartContext";
import Loading from "../components/Loading";
//let [confirmON, setConfirmON] = useState(false);
function GetTotalPrice(data) {
    let total = 0;
   /* data.filter(item => {*/
   data.price !== 0 ? total = (total + (data.price * data.number)) : NaN
  /*  })
    console.log("total =====", total);*/
    return (total)
};
function handleClickCancel(navigation,context,cartItem){


    var promise = new Promise(context.removeProductFromCart.bind(
        this,
        cartItem.id
      ))
    promise.then(navigation.navigate('Restaurants Screen'))
   
 

/*console.warn(product);*///navigation.navigate('Confirm Order Screen 1');
}

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
        <CartContext.Consumer>
            {context =>
            
        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <View style={{ height: '5%' }}>
                <Navigation
                    screenName={'My cart'}
                    onPress={() => navigation.navigate('Menus Screen')}
                />

            </View>
            <ScrollView style={{ backgroundColor: '#fcfcfc', flex: 1, }} >
                <View
                    style={{}}
                >
                    <View>
                       
                             <View>
                                {context.cart.map(cartItem => {
                                    return (
                                        <View style={{ flex: 1 }}>
                                            <View>

                                                <WaitingCartsCard
                                                    data={cartItem}
                                                    imagesrc="https://logowik.com/content/uploads/images/vector-triangle-logo-mark9022.jpg"
                                                    company_Name={"cartItem.company_Name"}
                                                    agent_Name={"cartItem.agent_Name"}
                                                    workingTime='8 February 2022  .13:36'
                                                    restaurant_name={"cartItem.restaurant_name"}
                                                    ShowPriceDetails={[false,]}
                                                    navigations={navigation}
                                                    Hidedetails
                                                    mode={'client'}
                                                />


                                                <ConfirmButtonCartsCard
                                                    onPressConfirm={() =>  navigation.navigate('Test Screen')}
                                                    price={GetTotalPrice(cartItem)}
                                                    onPressCancel={() => handleClickCancel(navigation,context,cartItem)}
                                                    mode={'client'}
                                                />


                                            </View>

                                        </View>
                                    );
                                })}
                            </View>

                           
                    </View>
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
                                    ShowPriceDetails={[false,]}
                                    navigations={navigation}
                                    Hidedetails
                                    mode={'client'}
                                />


                                <ConfirmButtonCartsCard
                                    onPressConfirm={() => context /*navigation.navigate('Confirm Order Screen')*/}
                                    price={GetTotalPrice(item.items)}
                                    onPressCancel={() => navigation.navigate('Restaurants Screen')}
                                    mode={'client'}
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
                                    ShowPriceDetails={[false,]}
                                    navigations={navigation}
                                    mode={'client'}
                                />




                            </View>

                        );



                    })}


                </View>

            </ScrollView>

           
        
        
         {context.loading?<Loading/>:<></>}
         </View>
        }
 
 </CartContext.Consumer>

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


