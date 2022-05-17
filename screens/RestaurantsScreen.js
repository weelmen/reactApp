import React, { useState } from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./style";
import { ScrollView, Keyboard, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';
import { ButtonGroup, SearchBar, Button, Icon, Divider } from 'react-native-elements';
import Restaurantscard from "../components/Restaurantscard";
import Searchbar from "../components/Searchbar";
import NavBar from "../components/Navbar";
import {fakerestaurantsdata} from "../api-json-server/fakedata.json"

const RestaurantsScreen = ({ navigation }) => {
    const [texts, setTexts] = useState('');
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [selectedUpperIndex, setSelectedUpperIndex] = useState(0);
    const [selectedDownerIndex, setSelectedDownerIndex] = useState(0);
    const [selectedIndexes, setSelectedIndexes] = useState([0]);
    const component1 = () => <Icon name="home" type='font-awesome-5' color={selectedDownerIndex === 0 ? '#6256fb' : '#e5e5e5'} />;
    const component2 = () => <Icon name="shopping-cart" type='font-awesome-5' color={selectedDownerIndex === 1 ? '#6256fb' : '#e5e5e5'} />;

    return (
        <View style={{ flex: 1, backgroundColor: '#fcfcfc' }}>

            <NavBar
                navBarText={"test"}
            />
            <Searchbar />


            <View style={{ flex: 1 }}>
                <ScrollView style={{ backgroundColor: '#fcfcfc' }}>


                    <View>
                        {fakerestaurantsdata.map(item => {
                            return (
                                <Restaurantscard showimage key={item.id} imagesrc={item.imagesrc} restaurantName={item.restaurantname} />
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
            <View style={{ borderColor: '#c7c8c6', borderWidth: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: 'white', }}>

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



export default RestaurantsScreen;
 /*<ButtonGroup

                   buttonContainerStyle={{ backgroundColor: 'white', borderColor: 'white', justifyContent: 'center', flexDirection: 'row', maxWidth: '38%' }}
                   selectedButtonStyle={{ backgroundColor: 'white', borderColor: 'white' }}
                   selectedTextStyle={{ color: '#6357ff' }}
                   buttons={['Orders', 'Offers']}
                   selectedIndex={selectedUpperIndex}
                   onPress={(value) => {
                       setSelectedUpperIndex(value);
                   }}
                   textStyle={{ fontSize: 14 }}
                   containerStyle={{ borderColor: 'white', marginBottom: 0, justifyContent: 'center', flexDirection: 'row' }}

               />
*/