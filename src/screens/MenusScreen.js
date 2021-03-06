import React, { useState } from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./style";
import { ActivityIndicator, ScrollView, Pressable, Keyboard, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';
import { ButtonGroup, SearchBar, Button, Icon, Divider, Card } from 'react-native-elements';
import MenuCard from "../components/Menuscard";
import Searchbar from "../components/Searchbar";
import { authUser } from "../controller/user.controller";
import NavBar from "../components/Navbar";
import ButtonsGroup from "../components/ButtonsGroup";
import Restaurantscard from "../components/Restaurantscard";
import Loading from "../components/Loading";
import CartContext from "../store/Context/cart/CartContext";
//import get from "../controller/user.controller";
//import { Axios } from "axios";

import { fakemenusdata } from '../api-json-server/fakedata.json'
import { fakerestaurantsdata } from '../api-json-server/fakedata.json'

import RestaurantsScreen from "./RestaurantsScreen";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "All",
        default: true
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Pizza",
        default: false
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Burguer",
        default: false
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1",
        title: "Tacos",
        default: false
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f632",
        title: "Sandwich",
        default: false
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d723",
        title: "Mlawi",
        default: false
    },
    {
        id: "43ac68afc-c605-48d3-a4f8-fbd91aa97f632",
        title: "Makloub",
        default: false
    },
    {
        id: "158694a0f-3da1-471f-bd96-145571e29d723",
        title: "Malfouf",
        default: false
    },
    {
        id: "23ac68afc-c605-48d3-a4f8-fbd91aa97f632",
        title: "Kalzonie",
        default: false
    },
    {
        id: "358694a0f-3da1-471f-bd96-145571e29d723",
        title: "Baguette farcie",
        default: false
    },
];


function byID(idToSearch, dt) {
    return dt.filter(item => {
        console.log(item)
        return item.id === idToSearch

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


const MenusScreen = ({ navigation }) => {
    //  const axios = require('axios').default;
    //let [responseData, setResponseData] = React.useState('')

    const [texts, setTexts] = useState('');
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [selectedUpperIndex, setSelectedUpperIndex] = useState(0);
    const [selectedDownerIndex, setSelectedDownerIndex] = useState(0);
    const [selectedIndexes, setSelectedIndexes] = useState([0]);
    const [card, setCard] = useState(1);
    const component1 = () => <Icon name="home" type='font-awesome-5' color={'#e5e5e5'} />;
    const component2 = () =>
        <Pressable onPress={() => navigation.navigate('Cart Screen')}>
            <Icon name="shopping-cart" type='font-awesome-5' color={'#e5e5e5'} />
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
        </Pressable>
        ;
    // Make a request for a user with a given ID
    /*  const data=await axios.get('http://localhost:3000/fakemenusdata?id=1');
         console.log(data)*/

    //  const Buttoncomponent1 = () => <View style={{backgroundColor:'red'}}><Text >All</Text></View>
    return (


       

<CartContext.Consumer>
                            {context => ( <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ backgroundColor: 'white'/*, flexDirection:'column' */, height: '22%' }}>
                <View style={{ height: '25%' }}>
                    <NavBar />

                </View>
                <View slyle={{ height: '20%' }}>
                    <ButtonsGroup
                        Data={DATA}
                        selected={DATA[0].id}
                        scroll={true}
                    />
                </View>

                <View style={{ height: '50%' }}>
                    {byID(3, fakerestaurantsdata).map((item, i) => {
                        return (
                            <View style={{ flex: 1 }}>
                                <Restaurantscard key={item.id} imagesrc={item.imagesrc} restaurantName={item.restaurantname} />
                            </View>
                        )
                    })}
                </View>




            </View>
            
            <View style={{ flex: 1 }}>


                <ScrollView style={{ backgroundColor: '#fcfcfc' }}>



                    <Searchbar />

                    <View style={{
                        /*flex: 1,*/
                        flexDirection: "row",
                        flexWrap: "wrap",
                        marginLeft: '4%',
                        //marginRight:'4%'

                    }}>


                        {fakemenusdata.map(menusdata => {
                            return (
                                <MenuCard key={menusdata.id} imagesrc={menusdata.srcimg} restaurantName={menusdata.name} onPress={() => navigation.navigate('Choice Screen', { data: menusdata })} />
                            );
                        })}



                    </View>

                </ScrollView>

            </View>
            <View style={{ borderColor: '#c7c8c6', borderWidth: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: 'white', height: '7%' }}>

                <ButtonGroup

                    buttonContainerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', justifyContent: 'center', flexDirection: 'row', maxWidth: '38%' }}
                    selectedButtonStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    //selectedTextStyle={{ color: '#ffa457' }}
                    buttons={[{ element: component1 }, { element: component2 }]}
                    // selectedIndex={selectedDownerIndex}
                    /* onPress={(value) => {
                        // setSelectedDownerIndex(value);
                     }}*/
                    textStyle={{ fontSize: 14 }}
                    containerStyle={{ borderColor: 'transparent', marginBottom: 0, justifyContent: 'center', flexDirection: 'row', }}
                />
            </View>
           
                                {context.loading?<Loading/>:<></>}
                                
                               </View> )}
            </CartContext.Consumer>
        

    );

}




export default MenusScreen;
