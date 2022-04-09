import React, { useState } from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./style";
import { ScrollView, Keyboard, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';
import { ButtonGroup, SearchBar, Button, Icon, Divider } from 'react-native-elements';
import MenuCard from "../components/Menuscard";
import Searchbar from "../components/Searchbar";
import { authUser } from "../controller/user.controller";
//import get from "../controller/user.controller";
//import { Axios } from "axios";

import {fakemenusdata} from '../api-json-server/fakedata.json'


import image1 from "../images/Menu1.jpg"
import image2 from "../images/Menu2.jpg"
import image3 from "../images/Menu3.jpg"
import image4 from "../images/Menu4.jpg"
import image5 from "../images/Menu5.jpg"
import image6 from "../images/Menu6.jpg"
//const menusdata = [];
//let [fakemenusdata, setfakemenusdata] =useState([]);
//let fakemenusdata = useState('');
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
    const component1 = () => <Icon name="home" type='font-awesome-5' color={selectedDownerIndex === 0 ? '#ffa457' : '#000'} />;
    const component2 = () => <Icon name="shopping-cart" type='font-awesome-5' color={selectedDownerIndex === 1 ? '#ffa457' : '#000'} />;
    // Make a request for a user with a given ID
    /*  const data=await axios.get('http://localhost:3000/fakemenusdata?id=1');
         console.log(data)*/

    //  const Buttoncomponent1 = () => <View style={{backgroundColor:'red'}}><Text >All</Text></View>
    return (

        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ borderRadius: 10, backgroundColor: 'white', flex: 2 /*,marginLeft:"-4%"*/ }}>

                <Searchbar />
                <ButtonGroup

                    buttonContainerStyle={{ backgroundColor: 'white', borderColor: 'white', justifyContent: 'center', flexDirection: 'row', maxWidth: '16.66%'/* ,width:'16%'*/ }}
                    selectedButtonStyle={{ backgroundColor: 'white', borderColor: 'white' }}
                    selectedTextStyle={{ color: '#ffa457' }}
                    buttons={['All', 'Burgues', 'Burgues', 'Burgues', 'Burgues', 'Burgues']}
                    selectedIndex={selectedUpperIndex}
                    onPress={(value) => {
                        setSelectedUpperIndex(value);
                    }}
                    textStyle={{ fontSize: 14, color: 'lightgrey' }}
                    containerStyle={{ borderColor: 'white', marginBottom: 0, justifyContent: 'center', flexDirection: 'row' }}

                />
                <View>

                </View>

            </View>
            <View style={{ flex: 10 }}>
                <ScrollView style={{ backgroundColor: '#f7f7f7' }}>
                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                        flexWrap: "wrap",
                        marginLeft: '4%',
                        //marginRight:'4%'

                    }}>


                        {fakemenusdata.map(menusdata => {
                            return (
                                <MenuCard key={menusdata.id} imagesrc={menusdata.srcimg} restaurantName={menusdata.name} />
                            );
                        })}



                    </View>
                </ScrollView>
            </View>
            <View style={{ borderColor: '#c7c8c6', borderWidth: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: 'white', flex: 1 }}>

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




export default MenusScreen;
