import React, { useState } from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./style";
import { ScrollView, Keyboard, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';
import { ButtonGroup, SearchBar, Button, Icon, Divider, Card } from 'react-native-elements';
import MenuCard from "../components/Menuscard";
import Searchbar from "../components/Searchbar";
import { authUser } from "../controller/user.controller";
import NavBar from "../components/Navbar";
import ButtonsGroup from "../components/ButtonsGroup";
import Restaurantscard from "../components/Restaurantscard";
import { fakecartdata_test } from '../api-json-server/fakedata.json';
import DeliveryCardd from "../components/DeliveryCardd";
//import get from "../controller/user.controller";
//import { Axios } from "axios";
import CartsCard from "../components/CartsCard";
import { fakemenusdata } from '../api-json-server/fakedata.json'
import { fakerestaurantsdata } from '../api-json-server/fakedata.json'
import { ConfirmButtonCartsCard } from "../components/CartsCard";



function GetTotalPrice(data) {
    /*let total = 0;
    data.filter(item => {
        item.price !== 0 ? total = (total + (item.price * item.number)) : NaN
    })
    console.log("total =====", total);*/
    return (4)
};
function byID(idToSearch) {
    return fakecartdata_test.filter(item => {

        return item.id === idToSearch
        consol.log(item);
    })
};



const axios = require('axios');
axios.get('https://my-json-server.typicode.com/weelmen/fakedata/fakemenusdata', {
    params: { /*"id": 6*/ }
})
    .then(function (response) {

        setfakemenusdata = response;
        console.log(fakemenusdata);

    })
    .catch(function (error) {
        console.log(error);
    });


const DeliveryAcceptScreen = ({ navigation }) => {
    //  const axios = require('axios').default;
    //let [responseData, setResponseData] = React.useState('')

    const [texts, setTexts] = useState('');
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [selectedUpperIndex, setSelectedUpperIndex] = useState(0);
    const [selectedDownerIndex, setSelectedDownerIndex] = useState(0);
    const [selectedIndexes, setSelectedIndexes] = useState([0]);
    const [card, setCard] = useState(1);
    const [action, setAction] = useState('Delivered');
    const [count, setCount] = useState(2);
    const [deliveryFeeMsg, setDeliveryFeeMsg] = useState('Delivery fee 4 TND');
    const [evaluation, setEvaluation] = useState('Good Job!!');
   
    const component1 = () => <Icon name="home" type='font-awesome-5' color={selectedDownerIndex === 0 ? '#6256fb' : '#e5e5e5'} />;
    const component2 = () =>
        <View>
            <Icon name="shopping-cart" type='font-awesome-5' color={selectedDownerIndex === 1 ? '#6256fb' : '#e5e5e5'} />
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
    // Make a request for a user with a given ID
    /*  const data=await axios.get('http://localhost:3000/fakemenusdata?id=1');
         console.log(data)*/

    //  const Buttoncomponent1 = () => <View style={{backgroundColor:'red'}}><Text >All</Text></View>
    return (

        <View style={{ flex: 1, backgroundColor:'#fcfcfc' }}>

            <View style={{ height: 50 ,backgroundColor: 'white'}}>

                <NavBar />
            </View>
            <View style={{ height: 100,backgroundColor: 'white' /*backgroundColor: 'blue' */ }}>
                <DeliveryCardd />
            </View>
            {action != 'Accept' ?
                <View style={{alignItems:'center' ,borderBottomLeftRadius:15,borderBottomRightRadius:15 ,backgroundColor:'white',borderBottomWidth:3,borderColor:'#f5f5f5'}}>
                    <Text style={{fontSize:15,fontWeight:'500',color:'#3a493a'}}>{action == 'GoToRestaurant' ?'Meal is ready in 3 min':(action == 'GoToClient' ?'Deliver the meal to "company" 25 min left':`${evaluation }`)}</Text>
                    <Text style={{color:'#6357ff',fontWeight:'400'}}>{action == 'GoToRestaurant' ?'Go to "restaurant" the meal is almost ready':(action == 'GoToClient' ?'365 m for destination':`${deliveryFeeMsg }`)}</Text>
                </View> : <></>}
            <ScrollView style={{ flex: 1 }}>

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
                            />


                            {action == 'Accept' ? <ConfirmButtonCartsCard
                                onPressConfirm={() => onPressFunction("Confirm Order Pressed")}
                                price={GetTotalPrice(item.items)}
                                onPressCancel={() => onPressFunction("Cancel Order Pressed")}
                                mode={'deliveryMan'}
                            /> : <></>}



                        </View>


                    );



                })}

                {action!='Delivered'?<View
                    style={{ flex: 1, height: 400, borderRadius: 10, backgroundColor: '#f5f5f5', marginHorizontal: 15 }}
                >


                    <Text style={{ fontSize: 26, alignSelf: 'center', margin: 120 }}>MAP</Text>








                </View>:<></>}

            </ScrollView>

            <View style={{ borderColor: '#c7c8c6', borderWidth: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: 'white', height: 47 }}>

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




export default DeliveryAcceptScreen;
